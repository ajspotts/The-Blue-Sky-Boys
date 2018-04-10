import React, { Component } from 'react';
import Gallery from './Gallery';

let imgUrls = [
]

class Docs extends Component {
  render() {
    return(
      <Gallery imgUrls={imgUrls} />
    )
  }
}

export default Docs;
