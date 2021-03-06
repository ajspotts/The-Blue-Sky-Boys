import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://s20.postimg.cc/xuezwylwt/001_Annie_Bill_Doris_1955.jpg', caption: 'Bill Bolick, his mother Annie and wife Doris, 1955', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/qr74hfo7x/002_Annie_Garland_1955.jpg', caption: 'Annie and Garland Bolick, 1955', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/6wl2v8w4t/008_Bolick_Children_ca_1940.jpg', caption: 'The Bolick children next tothe family home, ca. 1940:  Ruth, Carl, Bill, Earl, Myrtle, and James', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/lsjm2rmy5/009_Bolick_Children_1993.jpg', caption: 'James, Myrtle, Ruth, and Bill Bolick, 1993', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/915fw8q0t/010_Bolick_Family65.jpg', caption: 'The Bolick family, 1965:  Ruth, Earl, Bill, Carl, Myrtle, James, Annie, and Garland', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/79ch1er99/0018_unk_unk_Earl_s_wife_1940_s.jpg', caption: '', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/ckrdm3q6l/0019_Bill_in_uniform_1941.jpg', caption: 'Bill in the Army, 1941', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/vpumvux4t/021_Okinawa_Buddies_1945.jpg', caption: 'Bill (center) in Okinawa, 1945', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/hjew0jm8t/022_Wedding1.jpg', caption: 'Doris Wallace marries Bill Bolick, February 19, 1957', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/gtw3obj65/023_Wedding2.jpg', caption: 'Doris Wallace marries Bill Bolick, February 19, 1957', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/kq9fk5btp/024_Wedding3.jpg', caption: 'Doris Wallace marries Bill Bolick, February 19, 1957', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/v0bujgmal/025_Wedding4.jpg', caption: 'Doris Wallace marries Bill Bolick, February 19, 1957', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/s68p5zhjh/0032_Bill_ca._1940.jpg', caption: 'Bill Bolick, 1940s', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/o9vda4el9/0033_Boyd_Hilton_Bill_Kalamazoo_1933.jpg', caption: 'Bill Bolick (r) with Boyd Hilton, 1933.  Bill holds the Gibson Kalamazoo guitar he received when he graduated from high school', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/ilp2j22h9/0034_Bill_Ford_bumper_1940.jpg', caption: 'Bill perches on a 1940 Ford bumper', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/4tannb93x/0037_Earl_Bill_Willys_boat.jpg', caption: 'Earl, Bill, and friends with a boat on their Willys jeep, probably 1949', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/8oe1q1sbh/0040_Ruth_Earl_Bill_Carl_Myrtle_James_Garland_Annie_1965.jpg', caption: 'Ruth, Earl, Bill, Carl, Myrtle, James, Annie and Garland, 1965', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/asyer89el/0041_Earl_James_Bill_Carl_1965.jpg', caption: 'Earl, James, Bill and Carl, 1965', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/pc5jsiki5/0042_Earl_and_wife_Bill_Garland_Annie_James_and_wife_Carl.jpg', caption: 'Earl, Ruth,  Bill, Garland, Annie, James and wife, unknown woman, Carl, 1965', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/42hxhqost/0043_Unk_Bill_Unk_Earl_1963.jpg', caption: 'Bill and Earl with friends and ties, 1963', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/672aiqqel/0044_Bill_Unk_Unk_Earl_1963.jpg', caption: 'Bill and Earl with friends and ties, 1963', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/hjew0obzx/0045_Earl_puppy_early_60_s.jpg', caption: 'Bill with dogs', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/g4dbbz5rx/1942.jpg', caption: 'Bill in uniform, 1942', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/6wl2v6j99/Bill_1929.jpg', caption: 'Bill in front of the unfinished family home, 1929', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/gh4pi2vql/Bill_new_028_1935.jpg', caption: 'Bill holds his new Martin 028, 1935', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/42hxhu499/Bolick_house_2010.jpg', caption: 'Bolick family home, 2010, photo by Leslie Weidenhammer', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/4s0pu6pd9/Earl_1929.jpg', caption: 'Earl in front of the unfinished family home, 1929', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/t8ivop0el/Earl_1941-1.jpg', caption: 'Earl Bolick enters the service, 1941-42', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/rthazzer1/Earl_1941-2.jpg', caption: 'Earl Bolick enters the service, 1941-42', width: 0.2, height: 0.2 },
  { src: 'https://s20.postimg.cc/vd38pmwul/l_to_r_Carl_James_Earl_Myrtle_Bill_ca_1925.jpg', caption: 'The Bolick children, ca 1925. L to R:  Carl, James, Earl, Myrtle, Bill', width: 0.2, height: 0.2 },
];

export class Family extends React.Component {
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
