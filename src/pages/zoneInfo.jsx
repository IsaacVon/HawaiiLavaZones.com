import React, { Component } from "react";
import ZoneSpecificInfo from "../components/zoneSpecificInfo"
import Map from "../components/zoneMap"

class Search extends Component {
  state = {};
  render() {
    return (
      <>
        <ZoneSpecificInfo />
        <Map />
      </>
    );
  }
}

export default Search;
