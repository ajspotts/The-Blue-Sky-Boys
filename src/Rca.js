import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.cc/43rvazyal/0087_RCA_publicity_mid-40_s.jpg', caption: 'RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/4tannewa5/0088_Earl_closeup_ditto.jpg', caption: 'Earl smiles for the camera, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/izqeio20d/0089_E_B_C_legend_ditto_96.jpg', caption: 'Souvenir photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/yl7q2jtd9/0090_E_B_C_ditto.jpg', caption: 'Earl, Curly and Bill, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/y8gbwfnz1/0091_E_B_C_ditto.jpg', caption: 'Bill, Earl and Curly, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/6l3miendp/0092_B_C_E_ditto.jpg', caption: 'Bill, Curly and Earl, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/qfpo4axdp/0093_Bill_closeup_ditto.jpg', caption: 'Bill Bolick, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/68c8c0urh/0094_Curly_closeup_ditto.jpg', caption: 'Curly Parker, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/a4pk83825/0095_E_B_C_closeup_ditto.jpg', caption: 'Bill, Earl and Curly, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/9f6rvms25/0097_E_B.jpg', caption: 'Bill (standing) and Earl, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/lh25pzjct/0098_Earl_big_grin_no_g.jpg', caption: 'Earl Bolick, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/s7imzftnx/0099_Curly_closeup_no_f.jpg', caption: 'Curly Parker, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/l30tqpzct/0100_Earl_closeup_no_g.jpg', caption: 'Earl Bolick, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/5vku5vui5/0101_colorized_1947.jpg', caption: 'Colorized RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/gv61hlv8t/0102_E_B_w_inst_colorized.jpg', caption: 'Colorized RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/f3d2mp465/0103_ditto.jpg', caption: 'Colorized RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/t8ivousql/0104_E_B_matching_pinstripes.jpg', caption: 'RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/hkottygct/0105_E_B_big_grins_inst.jpg', caption: 'RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/9qo88w8nh/0107_B_C_E_insts.jpg', caption: 'RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/eduaaadwd/0108_E_B_no_inst.jpg', caption: 'RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/g4dbc5sz1/0109_B_E_inst.jpg', caption: 'RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/6jtop9vx9/0110_ditto_closeup.jpg', caption: 'RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/43rvb4vrh/0111_3d_try.jpg', caption: 'RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/l4arjsdxp/0112_B_C_E_inst_lite_suits.jpg', caption: 'RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/5621tmh4t/0113_Uncle_Josh_46_or_47.jpg', caption: 'Uncle Josh, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/68c8c2s7h/0114_B_E_C_inst_in_shadows.jpg', caption: 'Bill, Earl and Curly, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/jb7uvrijx/0115_E_C_B_inst.jpg', caption: 'Earl, Curly and Bill, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/nydwx15rh/0116_B_C_E_inst.jpg', caption: 'Bill, Earl and Curly, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/vr4kp296l/0117_B_big_grin_closeup.jpg', caption: 'Bill’s dazzling smile, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/n7l6rto4t/0118_E_C_B_legend.jpg', caption: 'Earl, Curly, Bill, RCA publicity photo, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/daa5yr13h/0119_B_E_C_medium_quality_legend.jpg', caption: 'Bill, Earl and Curly, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/ia7m6aebh/0120_E_B_C_poor_quality.jpg', caption: 'THE BLUE SKY BOYS with legend, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/6l3mi7kr1/0121_B_E_colorized.jpg', caption: 'Bill and Earl', width: 0.2, height: 0.2 },
];

export class Rca extends React.Component {
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
