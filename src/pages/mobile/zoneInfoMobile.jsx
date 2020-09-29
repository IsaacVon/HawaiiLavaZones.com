import React, { Component } from "react";
import ZoneSpecificInfo from "../../components/zoneInfo/zoneSpecificInfo";
import GeneralZoneInfo from "../../components/zoneInfo/generalZoneInfo";
import Container from "@material-ui/core/Container";

class ZoneInfo extends Component {
  state = {};
  render() {
    return (
      <Container maxWidth="sm" style={{ height: "85vh" }}>
        <GeneralZoneInfo />
        <ZoneSpecificInfo />
      </Container>
    );
  }
}

export default ZoneInfo;
