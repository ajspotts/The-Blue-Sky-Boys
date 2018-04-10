import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.org/powxyov25/0002_BSB_publicity_1937.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/a3fmen3nh/0005_Uncle_Josh_1938_WGST.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/m6ky2np4t/0046_B_E_UCLA_1965.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/pdfhm4wod/0047_Jul_65_Atlanta.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/h7xfo0iq5/0048_on_stage_ca.1965.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/yl7q2zw2l/0049_LA_pine_paneling_1965.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/asyerbwkt/005.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/6l3miq81p/0050_LA_pine_paneling_1965-2.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/ahgyely59/0051_LA_pine_paneling_1965-3.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/izqej1cel/0052_B_E_1974_blurred.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/gienbtail/0053_1974_Camp_Springs_NC.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/vr4kpaee5/0054_1974_Berryville_VA.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/k20l1jsn1/0055_1974_Berryville_VA.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/5vku6bx7h/0056_1974_Berryville_VA.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/fsvuz6f19/0057_prob._Duke_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/v1lsd4gh9/0058_ditto_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/gv61hvq6l/0059_in_pasture_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/v0bujori5/005_Bills_Guitar.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/672aj1nx9/005_Bills_Martin_Guitar.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/nlmir9vbx/0060_in_pasture_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/ahgyeng5p/0061_in_pasture_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/s7imzhje5/0062_in_pasture_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/8cwldhei5/0063_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/q2y9yex71/0064_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/s7imzhr3x/0065_Ken_Irwin_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/l4ark0j59/0066_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/s7imzmwal/0067_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/h7xfnzvkt/0068_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/uoue6uy6l/0069_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/r3yinq93h/006_Bills_Martin_Mandolin.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/f3d2mzejh/0070_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/onwp9ugq5/0071_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/92fdpppal/0072_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/zaqif31od/0073_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/8cwldhm7x/0074_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/imz0creod/0075_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/eqlogtyul/0076_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/n8v4l5xnh/0077_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/w3vyvg9il/0078_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/q2y9ydf6l/0079_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/n7l6rq8od/007_Bills_Oak_Mandolin.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/xvoxqhawt/0080_1975.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/yxz490eal/0081_1975.jpg', width: 0.2, height: 0.2 },
];

export class Sixties extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
