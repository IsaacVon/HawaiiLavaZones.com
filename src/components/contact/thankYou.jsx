import React, { Component } from 'react';

class ThankYou extends Component {

 


  render() { 

    const name =this.props.name.split(" ")
    const firstname = name[0];

    return ( 
      <h1>Thank you {firstname}, A real estate expert from our team will reach out to you shortly. We look forward to helping you!</h1>
     );
  }
}
 
export default ThankYou;