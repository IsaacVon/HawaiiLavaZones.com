import React, { Component } from "react";
import ZoneSpecificInfo from "../../components/zoneInfo/zoneSpecificInfo";
import GeneralZoneInfo from "../../components/zoneInfo/generalZoneInfo";
import Container from "@material-ui/core/Container";
import NavBarMobile from "../../components/mobile/navBarMobile";

class ZoneInfo extends Component {
  render() {
    return (
      <>
        <GeneralZoneInfo />
        <ZoneSpecificInfo />
      </>
    );
  }
}

export default ZoneInfo;
