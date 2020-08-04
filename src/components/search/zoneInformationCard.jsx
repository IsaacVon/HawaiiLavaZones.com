import React, { Component } from "react";

class ZoneInformationCard extends Component {
  render() {
    const { searchAddress, lavaZone } = this.props;

    return (
      <div>
        Search Address: {searchAddress}, Lava Zone: {lavaZone}
      </div>
    );
  }
}

export default ZoneInformationCard;
