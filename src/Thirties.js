import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.org/wfdf8307h/0001_June_36.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/powxyov25/0002_BSB_publicity_1937.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/kq9fk41j1/0003_publicity_1937.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/a3fmen3nh/0005_Uncle_Josh_1938_WGST.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/nkckxjvzh/0006_BR_Hillbillies1936.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/m5b08tn6l/0008_Earl_Homer_Bill_1937_Atlanta.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/asyeqz1m5/0009_Bill_Earl_Homer_ca._1937.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/unkgd6okd/0017_WGST_1930s_snapshot.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/g4dbbp34d/0020_Earl_Bill_Red_Hicks_1938.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/c7zzfuflp/0021_E_B_Red_publicity_ca._1938.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/c7zzfon9p/0031_Bill_new_Martin_1935.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/wfdf7zsgt/0035_Bill_Lute_1935_w_Martin.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/r3yinaltp/0036_Bill_Lute_Arthur_1935.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/ty1o0ryal/0038_Lute_Homer_Bill_35.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/dzsyanbsd/0084_Bill_and_Lute_faded.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/4s0ptzugd/0085_Bill_same_shoot.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/qefqaynv1/0086_Hickory_Nuts_same_shoot.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/vd38phc8d/0106_WGST_1938.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/7m3v7g4cd/BR_Hillbillies_36.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/3pqjbetml/CWC_Jenkins_String_Band.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/5hji6bkp9/CWC_Monroe_Bros.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/b5psxdwt9/CWC_Program.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/epbqmz9r1/E_Hickory_String_Band.jpg', width: 0.2, height: 0.2 },
];

export class Thirties extends React.Component {
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
