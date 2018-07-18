import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.cc/m6ky2np4t/0046_B_E_UCLA_1965.jpg', caption: 'Blue Sky Boys UCLA, Los Angeles, 1965', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/pdfhm4wod/0047_Jul_65_Atlanta.jpg', caption: 'On stage in Atlanta, 1965', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/h7xfo0iq5/0048_on_stage_ca.1965.jpg', caption: 'On stage, ca.1965', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/yl7q2zw2l/0049_LA_pine_paneling_1965.jpg', caption: 'Probably Los Angeles, 1965', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/6l3miq81p/0050_LA_pine_paneling_1965-2.jpg', caption: 'Probably Los Angeles, 1965', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/ahgyely59/0051_LA_pine_paneling_1965-3.jpg', caption: 'Probably Los Angeles, 1965', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/izqej1cel/0052_B_E_1974_blurred.jpg', caption: 'Blurred snapshot, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/gienbtail/0053_1974_Camp_Springs_NC.jpg', caption: 'On stage at the Memorial Day Weekend First Traditional Grass Music Festival, Camp Springs, NC, 1974', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/vr4kpaee5/0054_1974_Berryville_VA.jpg', caption: 'At Carlton Haney’s Berryville, VA Bluegrass Festival, July 1974', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/k20l1jsn1/0055_1974_Berryville_VA.jpg', caption: 'At Carlton Haney’s Berryville, VA Bluegrass Festival, July 1974', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/5vku6bx7h/0056_1974_Berryville_VA.jpg', caption: 'At Carlton Haney’s Berryville, VA Bluegrass Festival, July 1974', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/fsvuz6f19/0057_prob._Duke_1975.jpg', caption: 'Probably Duke University, April 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/v1lsd4gh9/0058_ditto_1975.jpg', caption: 'Probably Duke University, April 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/gv61hvq6l/0059_in_pasture_1975.jpg', caption: 'At a Rounder Records session, Nashville, May 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/nlmir9vbx/0060_in_pasture_1975.jpg', caption: 'At a Rounder Records session, Nashville, May 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/ahgyeng5p/0061_in_pasture_1975.jpg', caption: 'At a Rounder Records session, Nashville, May 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/s7imzhje5/0062_in_pasture_1975.jpg', caption: 'At a Rounder Records session, Nashville, May 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/8cwldhei5/0063_1975.jpg', caption: 'Unknown location, probably 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/q2y9yex71/0064_1975.jpg', caption: 'Unknown location, probably 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/s7imzhr3x/0065_Ken_Irwin_1975.jpg', caption: 'With Rounder Records producer Ken Irwin, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/l4ark0j59/0066_1975.jpg', caption: 'With Rounder Records producer Ken Irwin, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/s7imzmwal/0067_1975.jpg', caption: 'With Rounder Records producer Ken Irwin, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/h7xfnzvkt/0068_1975.jpg', caption: 'With Rounder Records producer Ken Irwin, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/uoue6uy6l/0069_1975.jpg', caption: 'With Rounder Records producer Ken Irwin, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/f3d2mzejh/0070_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/onwp9ugq5/0071_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/92fdpppal/0072_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/zaqif31od/0073_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/8cwldhm7x/0074_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/imz0creod/0075_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/eqlogtyul/0076_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/n8v4l5xnh/0077_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/w3vyvg9il/0078_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/q2y9ydf6l/0079_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/xvoxqhawt/0080_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/yxz490eal/0081_1975.jpg', caption: 'Rounder Records publicity proofs, Nashville, 1975', width: 0.2, height: 0.2 },
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
