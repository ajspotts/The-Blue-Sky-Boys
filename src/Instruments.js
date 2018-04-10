import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.org/v0bujori5/005_Bills_Guitar.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/672aj1nx9/005_Bills_Martin_Guitar.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/r3yinq93h/006_Bills_Martin_Mandolin.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/n7l6rq8od/007_Bills_Oak_Mandolin.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/tla9uyip9/013_CMHo_FMandolins_Guitar.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/nx3z41brx/015_Hallof_Fame_Exhibit001.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/hw6a6xual/016_Hallof_Fame_Exhibit002.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/tla9uy39p/017_Hallof_Fame_Mandolin001.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/g4dbc2l8d/018_Hallof_Fame_Mandolin002.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/672aj05wt/019_Martin_Mandolin.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/epbqne9vh/020_Oak_Mandolin.jpg', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.org/42hxhyekt/0127_Bill_s_Instruments_1972.jpg', width: 0.2, height: 0.2 },
];

export class Instruments extends React.Component {
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
