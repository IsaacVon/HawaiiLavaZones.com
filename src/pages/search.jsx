import React, { Component } from "react";
import AddressSearch from "../components/addressSearch";
import GoogleMap from "../components/googleMap"


class Search extends Component {
  state = {
    lat: 19.725260,
    lng: -155.089096,
  };

  handlePin = (event) => {
    console.log("handle pin working")
    console.log(event)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  };

  handleSubmit = () => {
    // Connect to database later
    console.log(this.state);
  };

  render() {
    return (
      <>
        <GoogleMap 
        lat={this.state.lat}
        lng={this.state.lng}
        handlePin={this.handlePin}
        />
        
      </>
    );
  }
}

export default Search;
