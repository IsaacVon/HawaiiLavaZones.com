import React, { Component } from "react";
import ZoneSpecificInfo from "../components/zoneSpecificInfo"
import Container from '@material-ui/core/Container';
import Map from "../components/googleMap"


class Search extends Component {
  state = {};
  render() {
    return (
      <>
        <Container component="main" maxWidth="xs">
        <ZoneSpecificInfo />
        </Container>
        <Map />
       
      </>
    );
  }
}

export default Search;
