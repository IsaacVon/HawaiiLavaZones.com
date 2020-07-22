import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  KmlLayer,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
};



export default function App(props) {

  // Use pin from search for center if it is not null.
  const defaultCenter = {lat: 19.647822, lng: -155.538050}
  const pinCenter = {lat: props.lat, lng: props.lng}  
  let center = props.lat ? pinCenter : defaultCenter 


  const { isLoaded, loadError } = useLoadScript({
    //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyCGJr4hqm5LtdMCGQo7mCZvO-HEvKV54DM",
    libraries,
    // ID IS NOT WORKING
    googleMapsClientId:"b22671634953788f"
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (



    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={9.5}
        center={center}
        options={options}
      >
      <KmlLayer
      url="https://nightskybrightness.s3.eu-west- 
      3.amazonaws.com/artificialNightSkyBrightness_example.kml">
      </KmlLayer>
        <Marker
          position={{
            lat: props.lat,
            lng: props.lng,
          }}
        />
        <StandaloneSearchBox 
              onPlacesChanged={props.onPlacesChanged}>
          <input
            type="text"
            placeholder="Search Address"
            name="searchAddress"
            onChange={props.handleSearch} // update the state when you type something
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `40px`,
              padding: `0 12px`,
              borderRadius: `2px`,
              boxShadow: `0 1px 3px rgba(0, 0, 0, 0.2)`,
              fontSize: `18px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          />
        </StandaloneSearchBox>
      </GoogleMap>
    </div>
  );
}
