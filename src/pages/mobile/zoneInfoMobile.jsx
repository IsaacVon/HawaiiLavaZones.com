import React, { Component } from "react";
import ZoneSpecificInfo from "../../components/zoneInfo/zoneSpecificInfo";
import GeneralZoneInfo from "../../components/zoneInfo/generalZoneInfo";


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
