import React, { Component } from 'react';
import map from "../resources/map.jpg"


class Map extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <p>map</p>
      <img src={map} alt="map" />;
      </>
     );
  }
}
 
export default Map;