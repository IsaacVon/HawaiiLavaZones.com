import React, { Component } from "react";
import GoogleMap from "../components/googleMap";
import { addressToZone } from "../utils/addressToZone";

class CheckAddress extends Component {
  state = {
    addressValid: true,
    searchAddress: "",
    lat: 0,
    lng: 0,
    lavaZone: 0,
  };

  onPlacesChanged = async () => {
    let clickedAddress = document.getElementById("addressSearch").value;
    const data = await addressToZone(clickedAddress); // this needs to recieve error if address is wrong

    if (data === undefined) {
      console.log("onPlacesChanged - Address not hawaii");
      this.setState({
        addressValid: false,
      });
    } else {
      this.setState({
        addressValid: true,
        searchAddress: clickedAddress,
        lat: data.geoLocationLat,
        lng: data.geoLocationLng,
        lavaZone: data.lavaZone,
      });
    }
  };

  render() {
    return (
      <>
        <GoogleMap
          searchAddress={this.state.searchAddress}
          lat={this.state.lat}
          lng={this.state.lng}
          onPlacesChanged={this.onPlacesChanged}
        />
      </>
    );
  }
}

export default CheckAddress;
