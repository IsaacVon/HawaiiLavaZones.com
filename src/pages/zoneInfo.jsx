import React, { Component } from "react";
import ZoneSpecificInfo from "../components/zoneSpecificInfo"
import Map from "../components/zoneMap"
import Container from '@material-ui/core/Container';


class Search extends Component {
  state = {};
  render() {
    return (
      <>
        <Container component="main" maxWidth="xs">
        <ZoneSpecificInfo />
        <Map />
        </Container>
      </>
    );
  }
}

export default Search;
