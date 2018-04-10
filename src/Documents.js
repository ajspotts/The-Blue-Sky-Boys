import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.org/gh4picqod/001.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/asyerbwkt/005.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/r3yinje6l/LR_acceptance_51.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/m5b094kp9/LR_Transcript_1956.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/m5b094kp9/LR_Transcript_1956.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/x4w7kw3gd/Bill_Bolick_High_School_Diploma.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/n7l6rp63h/Blue_Bird_Records_Add_001.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/m5b092fjh/Debate_award_1953.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/cxirsdg71/Debate_Award-2.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/nkckxue2l/Debating_Award_1953.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/nx3z3yr6l/Illini_Concert.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/epbqnauf1/RCA_Promotions.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/zc0g88nzx/Ford_purchase_1-46.jpg', width: 0.2, height: 0.2 },
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
