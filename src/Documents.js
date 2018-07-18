import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.cc/gh4picqod/001.jpg', caption: '', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/asyerbwkt/005.jpg', caption: '', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/r3yinje6l/LR_acceptance_51.jpg', caption: 'The envelope that contained Bill’s letter of acceptance to Lenoir Rhyne College, 1951', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/m5b094kp9/LR_Transcript_1956.jpg', caption: '', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/x4w7kw3gd/Bill_Bolick_High_School_Diploma.jpg', caption: '', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/n7l6rp63h/Blue_Bird_Records_Add_001.jpg', caption: '', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/m5b092fjh/Debate_award_1953.jpg', caption: '', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/cxirsdg71/Debate_Award-2.jpg', caption: '', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/nkckxue2l/Debating_Award_1953.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/nx3z3yr6l/Illini_Concert.jpg', caption: '', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/epbqnauf1/RCA_Promotions.jpg', caption: '', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/zc0g88nzx/Ford_purchase_1-46.jpg', caption: '', width: 0.2, height: 0.2 },
];

export class Documents extends React.Component {
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
