import googleGeoAPI from "../apiKeys";

async function addressToZone(address) {
  const geoCoordinatesURL = buildGeoCoordinatesURL(address);
  const geoCoordinates = await requestGeoCoordinates(geoCoordinatesURL);
  console.log("geoCoordinates: ", geoCoordinates)


  // Need to add rest of functions this way... stuck on getting requestGeoCoordinates to return its data
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

// function requestGeoCoordinates(geoConvertUrl) {
//   fetch(geoConvertUrl)
//     .then((response) => response.json())
//     .then((data) => buildLavaZoneURL(data))
//     .catch((e) => console.log(e));
// }

async function requestGeoCoordinates(geoConvertUrl) {
  try {
      const response = await fetch(geoConvertUrl);
      const data = response.json();
      return buildLavaZoneURL(data);
  } catch (error) {
      console.log('requestGeoCoordinates error', error);
  }
}

function buildLavaZoneURL(data) {
  let geoLocationLat = data.results[0].geometry.location.lat;
  let geoLocationLng = data.results[0].geometry.location.lng;
  console.log("Lat: ", geoLocationLat);
  console.log("Lng: ", geoLocationLng);

  let lavaZoneUrl =
    "https://geodata.hawaii.gov/arcgis/rest/services/Hazards/MapServer/3/query?where=1%3D1&outFields=hzone&geometry=" +
    geoLocationLng +
    "%2C" +
    geoLocationLat +
    "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&returnGeometry=false&returnDistinctValues=true&outSR=4326&f=json";

  requestLavaZone(lavaZoneUrl);
}

function requestLavaZone(lavaZoneUrl) {
  fetch(lavaZoneUrl)
    .then((response) => response.json())
    .then((data) => updateLavazoneState(data))
    .catch((e) => console.log(e));
}

function updateLavazoneState(data) {
  let lavaZone = data.features[0].attributes.hzone;
  console.log("Lava Zone", lavaZone);

  return lavaZone;
}

export { addressToZone };
