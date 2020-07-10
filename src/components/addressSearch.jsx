import React, { Component } from 'react';
import {getLavaZone} from '../utils/getLavaZone'

class AddressSearch extends Component {
  state = {  }

  

  render() { 
    return (    
    <>     
    <input id="addressInput" type="text" placeholder="Enter Address" />
    <button onClick={getLavaZone} id="submit">Submit</button>
    

    </>
    )
  }

}
 
export default AddressSearch;