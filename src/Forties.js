import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.cc/5itfznesd/0010_Johnny_Bill_Curly_Earl_ca._1945.jpg', caption: 'Johnny with Bill, Curly and Earl , 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/fg4gstha5/0016_Bill_Earl_Curly_Johnny_Wesley_1945.jpg', caption: 'Bill,  Earl and Curly (with ties), Johnny & Wesley (kneeling) 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/wter7o4vh/0011_blk_sedan_40s.jpg', caption: 'Black Sedan', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/rur8t33ml/0012_sedan_side_view.jpg', caption: 'Sedan side view', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/oze5mp4wt/0013_sedan_front_view.jpg', caption: 'Sedan front view', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/eduaab11p/0014_white_sedan_front_view.jpg', caption: 'White sedan', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/sx1fbl4fh/0022_WGST_ca.mid-40_s.jpg', caption: 'Earl, Curly and Bill, WGST, 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/uc300c0dp/0023_Curly_E_B_wh_sedan.jpg', caption: 'Curly, Earl and Bill, with white sedan', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/l4arjnvwd/0024_same_shoot_0022.jpg', caption: 'Earl, Curly and Bill, WGST, 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/4gj9h6vzx/0025_same_shoot_0022.jpg', caption: 'Earl, Curly and Bill, WGST, 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/xixjjwfnx/0026_Curly_same_as_0022.jpg', caption: 'Curly takes a break, WGST, 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/k20l19ajx/0027_trio_same_as_0022.jpg', caption: 'Earl, Curly and Bill, WGST, 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/rgpwtwz31/0028_Bill_same_as_0022.jpg', caption: 'Bill Bolick, WGST, 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/imz0cbbz1/0029_E_B_same_as_0022.jpg', caption: 'Curly and Earl, WGST, 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/m6ky2bp19/0030_Curly_same_as_0022.jpg', caption: 'Curly Parker, WGST, 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/4tannb93x/0037_Earl_Bill_Willys_boat.jpg', caption: '0037 Earl , Bill and crew, with a boat strapped on their jeep, probably 1947', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/jchsot9zh/0082_Bill_on_right_poor_quality.jpg', caption: 'Curly takes a chorus, 1940s snapshot', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/jchsosmu5/0083_Josh_same_shoot.jpg', caption: 'Uncle Josh, 1940s snapshot', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/jp96ux7nx/Josh_Bill_Bristol.jpg', caption: 'Uncle Josh and Bill, probably near Bristol, VA, 1949', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/6l3mif2t9/0122_Josh_Bill_Bristol.jpg', caption: 'Uncle Josh and Bill, probably near Bristol, VA, 1949', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/3pqjbtebh/0124_Josh_Bill_Bristol.jpg', caption: 'Uncle Josh and Bill, probably near Bristol, VA, 1949', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/qefqbfdpp/011_Bristol1949.jpg', caption: 'Uncle Josh and Bill, probably near Bristol, VA, 1949', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/s68p6ck7x/0123_Bristol_dancers_47_plymouth.jpg', caption: 'Bill, Earl (hidden) and Curly, with performing couple next to their car, at a sports field, probably near Bristol, VA, 1949', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/ia7m6cjh9/012_BSB_Capitola_Banner.jpg', caption: 'Capitola Banner, Atlanta, probably 1947', width: 0.2, height: 0.2 }
];

export class Forties extends React.Component {
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
