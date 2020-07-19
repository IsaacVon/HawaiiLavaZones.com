import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  KmlLayer,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 19.604196,
  lng: -155.510799,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
}

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyCGJr4hqm5LtdMCGQo7mCZvO-HEvKV54DM",
    libraries,
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
        <KmlLayer url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml" />

      </GoogleMap>
    </div>
  );
}
