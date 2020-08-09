import React, { Component } from "react";
import GoogleMap from "../components/search/googleMap";
import ZoneInformationCard from "../components/search/zoneInformationCard";
import WrongInputCard from "../components/search/wrongInputCard";
import { addressToZone } from "../utils/addressToZone";
import Grid from "@material-ui/core/Grid";

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
        lavaZone: parseInt(data.lavaZone),
      });
    }
  };

  render() {
    if (this.state.addressValid && this.state.searchAddress !== "") {
      return (
        <>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={11}>
              <ZoneInformationCard
                searchAddress={this.state.searchAddress}
                lavaZone={this.state.lavaZone}
              />
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={11}>
              <GoogleMap
                searchAddress={this.state.searchAddress}
                lat={this.state.lat}
                lng={this.state.lng}
                onPlacesChanged={this.onPlacesChanged}
              />
            </Grid>
          </Grid>
        </>
      );
    } else if (this.state.addressValid) {
      return (
        <>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={11}>
              <GoogleMap
                searchAddress={this.state.searchAddress}
                lat={this.state.lat}
                lng={this.state.lng}
                onPlacesChanged={this.onPlacesChanged}
              />
            </Grid>
          </Grid>
        </>
      );
    } else if (!this.state.addressValid) {
      return (
        <>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={11}>
              <WrongInputCard searchAddress={this.state.searchAddress} />
            </Grid>
            <Grid item xs={11}>
              <GoogleMap
                searchAddress={this.state.searchAddress}
                lat={this.state.lat}
                lng={this.state.lng}
                onPlacesChanged={this.onPlacesChanged}
              />
            </Grid>
          </Grid>
        </>
      );
    }
  }
}

export default CheckAddress;
