import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.cc/wfdf8307h/0001_June_36.jpg', caption: 'Early publicity shot, 1936.  Bill holds his E.M. Hembree mandolin.  Courtesy of Alan Justice & Marshall Wyatt', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/powxyov25/0002_BSB_publicity_1937.jpg', caption: 'Blue Sky Boys, ca. 1937.  Courtesy of Ben Niblock', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/kq9fk41j1/0003_publicity_1937.jpg', caption: 'Blue Sky Boys, ca. 1937  Courtesy of Ben Niblock', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/a3fmen3nh/0005_Uncle_Josh_1938_WGST.jpg', caption: 'Earl Bolick as Uncle Josh, 1938', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/nkckxjvzh/0006_BR_Hillbillies1936.jpg', caption: 'Blue Ridge Hillbillies, 1936', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/m5b08tn6l/0008_Earl_Homer_Bill_1937_Atlanta.jpg', caption: 'Blue Sky Boys, 1937 (Earl, Homer and Bill', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/asyeqz1m5/0009_Bill_Earl_Homer_ca._1937.jpg', caption: 'Earl, Bill and Homer', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/unkgd6okd/0017_WGST_1930s_snapshot.jpg', caption: 'Blue Sky Boys at WGST (Atlanta), probably 1937', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/g4dbbp34d/0020_Earl_Bill_Red_Hicks_1938.jpg', caption: 'Blue Sky Boys with Red Hicks (r), ca. 1938', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/c7zzfuflp/0021_E_B_Red_publicity_ca._1938.jpg', caption: 'Blue Sky Boys with Red Hicks (r), ca. 1938', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/c7zzfon9p/0031_Bill_new_Martin_1935.jpg', caption: 'Bill with his new Martin, 1935', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/wfdf7zsgt/0035_Bill_Lute_1935_w_Martin.jpg', caption: 'Bill with Lute Isenhour (banjo),1935', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/r3yinaltp/0036_Bill_Lute_Arthur_1935.jpg', caption: 'Bill, Lute and (probably) Arthur Sherrill, 1935', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/ty1o0ryal/0038_Lute_Homer_Bill_35.jpg', caption: 'Lute Isenhour (banjo), Homer Sherrill (fiddle), and Bill Bolick (guitar), 1935-6', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/dzsyanbsd/0084_Bill_and_Lute_faded.jpg', caption: 'Bill (with Kalamazoo guitar) and Lute Isenhour, 1934-5', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/4s0ptzugd/0085_Bill_same_shoot.jpg', caption: 'Bill with Kalamazoo guitar, 1934-5', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/qefqaynv1/0086_Hickory_Nuts_same_shoot.jpg', caption: 'Bill Bolick, Lute Isenhour, Homer Sherrill and Arthur Sherrill (1934-5)', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/vd38phc8d/0106_WGST_1938.jpg', caption: ' Bill and Earl, Probably WGST, 1938', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/7m3v7g4cd/BR_Hillbillies_36.jpg', caption: 'Earl, Homer and Bill as the Blue Ridge Hillbillies,1936', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/3pqjbetml/CWC_Jenkins_String_Band.jpg', caption: 'Jenkins String Band, WBT (Charlotte), 1934.  Dewitt "Snuffy" Jenkins-banjo, older brother Verl-fiddle', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/5hji6bkp9/CWC_Monroe_Bros.jpg', caption: 'Monroe Brothers with Byron Parker, 1936', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/b5psxdwt9/CWC_Program.jpg', caption: 'Crazy Barn Dance cast, WBT (Charlotte), 1934-5', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/epbqmz9r1/E_Hickory_String_Band.jpg', caption: "Homer Sherrill's first band, WBT (Charlotte), 1934-5", width: 0.2, height: 0.2 },
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
