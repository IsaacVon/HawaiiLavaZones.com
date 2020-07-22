import React from "react";

// Input: lat, lng
// Output: LavaZone to state in search

export default function geoLavaZone(props) {
  let geoLocationLat = props.lat;
  let geoLocationLng = props.lng;

  if (props.lat) {
    let lavaZoneUrl =
      "https://geodata.hawaii.gov/arcgis/rest/services/Hazards/MapServer/3/query?where=1%3D1&outFields=hzone&geometry=" +
      geoLocationLng +
      "%2C" +
      geoLocationLat +
      "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&returnGeometry=false&returnDistinctValues=true&outSR=4326&f=json";

    fetch(lavaZoneUrl)
      .then((response) => response.json())
      .then((data) => {
        let lavaZone = data.features[0].attributes.hzone;
        props.handleLavaZoneUpdate(lavaZone)        
      })
      .catch((e) => console.log(e));
  }

  return <h1>lavaZone: see state</h1>;
}
