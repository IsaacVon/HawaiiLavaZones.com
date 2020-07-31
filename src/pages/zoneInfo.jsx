import React, { Component } from "react";
import ZoneSpecificInfo from "../components/zoneSpecificInfo"
import Container from '@material-ui/core/Container';

class ZoneInfo extends Component {
  state = {};
  render() {
    return (
      <>
        <Container component="main" maxWidth="xs">
        <ZoneSpecificInfo />
        </Container>
      
       
      </>
    );
  }
}

export default ZoneInfo;
