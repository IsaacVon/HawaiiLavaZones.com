import React, { Component } from "react";
import GoogleMap from "../components/search/googleMap";
import ZoneInformationCard from "../components/search/zoneInformationCard";
import WrongInputCard from "../components/search/wrongInputCard";
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
    const data = await addressToZone(clickedAddress);

    if (data === undefined) {
      this.setState({
        addressValid: false,
        searchAddress: clickedAddress,
        lat: 0,
        lng: 0,
        lavaZone: 0,
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
    if (this.state.addressValid && this.state.searchAddress !== "") {
      return (
        <>
          <ZoneInformationCard
            searchAddress={this.state.searchAddress}
            lavaZone={this.state.lavaZone}
          />
          <GoogleMap
            searchAddress={this.state.searchAddress}
            lat={this.state.lat}
            lng={this.state.lng}
            onPlacesChanged={this.onPlacesChanged}
          />
        </>
      );
    } else if (this.state.addressValid) {
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
    } else if (!this.state.addressValid) {
      return (
        <>
          <WrongInputCard searchAddress={this.state.searchAddress} />
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
}

export default CheckAddress;
