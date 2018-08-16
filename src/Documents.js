import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.cc/gh4picqod/001.jpg', caption: 'RCA promotion notice, 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/asyerbwkt/005.jpg', caption: 'RCA Bluebird catalog, 1936', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/r3yinje6l/LR_acceptance_51.jpg', caption: "Bill's college acceptance letter", width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/m5b094kp9/LR_Transcript_1956.jpg', caption: "Bill's college transcript, 1956", width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/x4w7kw3gd/Bill_Bolick_High_School_Diploma.jpg', caption: "Bill's high school diploma, 1933", width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/n7l6rp63h/Blue_Bird_Records_Add_001.jpg', caption: 'RCA Bluebird catalog, 1936', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/m5b092fjh/Debate_award_1953.jpg', caption: '"Extemporaneous speaking" award, 1953', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/cxirsdg71/Debate_Award-2.jpg', caption: 'Debating award, 1953', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/nx3z3yr6l/Illini_Concert.jpg', caption: "Poster,  Blue Sky Boys' first appearance since their 1951 retirement", width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/epbqnauf1/RCA_Promotions.jpg', caption: 'RCA promotion flyer, 1948', width: 0.2, height: 0.2 },
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
