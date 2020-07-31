import React, { Component } from "react";
import GoogleMap from "../components/googleMap";
import { addressToZone } from "../utils/addressToZone"

class CheckAddress extends Component {
  state = {
    searchAddress: "",
    lat: 0,
    lng: 0,
    lavaZone: 0,
  };

  onPlacesChanged = async () => {
    let clickedAddress = document.getElementById("addressSearch").value
    // onPlacesChanged doesnt pass an argument
    const data = await addressToZone(clickedAddress)
    console.log("address to zone in search.jsx: ", data)
    this.setState({ 
      searchAddress: clickedAddress,
      lat: data.geoLocationLat,
      lng: data.geoLocationLng,
      lavaZone: data.lavaZone
    })
   
    
  };

  handleGeoUpdate = (event) => {
    console.log(event)
  }

  handleLavaZoneUpdate = (event) => {
    this.setState({ lavaZone: event});
  };
  
  handleSearch = (event) => {
    this.setState({ [event.target.name]: event.target.value });    
    // Add callback here
  };

  handlePin = (event) => {
    console.log("handle pin working");
    console.log(event);
  };

  render() {
    return (
      <>
        <GoogleMap
          searchAddress={this.state.searchAddress}
          lat={this.state.lat}
          lng={this.state.lng}
          handleSearch={this.handleSearch}
          handlePin={this.handlePin}
          onPlacesChanged={this.onPlacesChanged}
        />
      </>
    );
  }
}

export default CheckAddress;
