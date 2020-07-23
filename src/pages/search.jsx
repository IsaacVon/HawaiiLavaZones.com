import React, { Component } from "react";
import AddressSearch from "../components/addressSearch";
import GoogleMap from "../components/googleMap";
import GeoLavaZone from "../components/geoLavaZone";

class Search extends Component {
  state = {
    searchAddress: "",
    lat: 0,
    lng: 0,
    lavaZone: 0,
  };

  onPlacesChanged = (e) => {
    // I cannot get data from input to pull in here like in handle change. getPlaces
    console.log("onplaces changed working");
  };

  handleLavaZoneUpdate = (event) => {
    this.setState({ lavaZone: event});
    console.log(this.state);
  };
  
  handleSearch = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handlePin = (event) => {
    console.log("handle pin working");
    console.log(event);
  };

  handleSubmit = () => {
    // Connect to database later
    console.log(this.state);
  };

  render() {
    return (
      <>
  
        <GeoLavaZone 
          lat={this.state.lat} 
          lng={this.state.lng} 
          handleLavaZoneUpdate={this.handleLavaZoneUpdate}
        />

        <GoogleMap
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

export default Search;
