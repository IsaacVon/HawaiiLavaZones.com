function getLavaZone(address) {
  // Take in address from html and encode it for the geoconverter url
  address = encodeURI(document.getElementById("addressInput").value);

  // START: Get Geo Coordinates from address 
  // Input: Address
  let apiKey = "AIzaSyAoDOYaQPAVKAgh3QAFDx-L4X5472UwppQ";
  let geoConvertUrl =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    address +
    "&key=" +
    apiKey;

  fetch(geoConvertUrl)
    .then((response) => response.json())
    // END: Get Geo Coordinates from address 
    // Output Geo Coordinates: geoLocationLat, geoLocationLng

    // START: Get Lava Zone from Geo Coordinates
    .then((data) => {
      let geoLocationLat = data.results[0].geometry.location.lat;
      let geoLocationLng = data.results[0].geometry.location.lng;
      let lavaZoneUrl =
        "https://geodata.hawaii.gov/arcgis/rest/services/Hazards/MapServer/3/query?where=1%3D1&outFields=hzone&geometry=" +
        geoLocationLng +
        "%2C" +
        geoLocationLat +
        "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&returnGeometry=false&returnDistinctValues=true&outSR=4326&f=json";

      fetch(lavaZoneUrl)
        .then((response) => response.json())
        .then((data) => {
        // END: Get Lava Zone from Geo Coordinates
        // Output lavaZone

          let lavaZone = data.features[0].attributes.hzone;
          console.log("Lava Zone " + lavaZone);
          document.getElementById("lavaZone").innerHTML =
            "Lava Zone " + lavaZone;
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
}

export { getLavaZone };
