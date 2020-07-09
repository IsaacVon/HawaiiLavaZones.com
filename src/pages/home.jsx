import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <>
                <input id="addressInput" type="text" placeholder="Enter Address"/>
                <button id="submit">Submit</button>
            </>
         );
    }
}
 
export default Home;