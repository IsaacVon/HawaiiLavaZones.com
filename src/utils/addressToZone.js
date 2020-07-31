import googleGeoAPI from "../apiKeys";

async function addressToZone(address) {
  try {
    const geoCoordinatesURL = buildGeoCoordinatesURL(address);
    const geoCoordinates = await requestGeoCoordinates(geoCoordinatesURL);
    const verifiedgeoCoordinates = verifyGeoCoordinates(geoCoordinates);
    const lavaZoneUrl = buildLavaZoneURL(verifiedgeoCoordinates);
    const lavaZoneRaw = await requestLavaZoneRaw(lavaZoneUrl);
    const finalData = proccessFinalData(lavaZoneRaw, geoCoordinates);
    return finalData;
  } catch (err) {
    console.log("Error", err.message);
  }
}

function buildGeoCoordinatesURL(address) {
  address = encodeURI(address);
  const apiKey = googleGeoAPI.googleGeoAPI;
  const geoConvertUrl =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    address +
    "&key=" +
    apiKey;
  return geoConvertUrl;
}

async function requestGeoCoordinates(geoConvertUrl) {
  try {
    const response = await fetch(geoConvertUrl);
    const data = response.json();
    return data;
  } catch (error) {
    console.log("requestGeoCoordinates error: ", error);
  }
}

function verifyGeoCoordinates(geoCoordinates) {
  // Hawaii Big Island Lat & Lng bounds
  const lngMax = -154.7;
  const lngMin = -156.1;
  const latMax = 20.3;
  const latMin = 18.7;

  const geoLocationLng = geoCoordinates.results[0].geometry.location.lng;
  const geoLocationLat = geoCoordinates.results[0].geometry.location.lat;

  console.log(
    "verifying GeoCoordinates... ",
    "Lat: ",
    geoLocationLat,
    "Lng: ",
    geoLocationLng
  );

  if (
    geoLocationLng > lngMin &&
    geoLocationLng < lngMax &&
    geoLocationLat > latMin &&
    geoLocationLat < latMax
  ) {
    console.log("Coordinates successfully verified...");
    return geoCoordinates;
  } else console.log("NOT IN HAWAII IDIOT");
}

function buildLavaZoneURL(data) {
  let geoLocationLat = data.results[0].geometry.location.lat;
  let geoLocationLng = data.results[0].geometry.location.lng;

  let lavaZoneUrl =
    "https://geodata.hawaii.gov/arcgis/rest/services/Hazards/MapServer/3/query?where=1%3D1&outFields=hzone&geometry=" +
    geoLocationLng +
    "%2C" +
    geoLocationLat +
    "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&returnGeometry=false&returnDistinctValues=true&outSR=4326&f=json";

  return lavaZoneUrl;
}

async function requestLavaZoneRaw(lavaZoneUrl) {
  try {
    const response = await fetch(lavaZoneUrl);
    const data = response.json();
    return data;
  } catch (error) {
    console.log("requestLavaZone error: ", error);
  }
}

function proccessFinalData(lavaZoneRaw, geoCoordinates) {
  const lavaZone = lavaZoneRaw.features[0].attributes.hzone;
  const geoLocationLat = geoCoordinates.results[0].geometry.location.lat;
  const geoLocationLng = geoCoordinates.results[0].geometry.location.lng;

  const finalData = { lavaZone, geoLocationLat, geoLocationLng };

  return finalData;
}

export { addressToZone };
