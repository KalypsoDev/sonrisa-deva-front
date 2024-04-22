import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import deva1 from "../../../assets/img/deva1.jpg";
import deva3 from "../../../assets/img/deva3.jpg";
import deva2 from "../../../assets/img/deva2.jpg";
import deva4 from "../../../assets/img/deva4.jpg";
import deva5 from "../../../assets/img/deva5.jpg";
import deva6 from "../../../assets/img/deva6.jpg";

const images = [
  {
    original: deva1,
    thumbnail: deva1,
  },
  {
    original: deva2,
    thumbnail: deva2,
  },
  {
    original: deva3,
    thumbnail: deva3,
  },
  {
    original: deva4,
    thumbnail: deva4,
  },
  {
    original: deva5,
    thumbnail: deva5,
  },
  {
    original: deva6,
    thumbnail: deva6,
  },
];

const Carousel = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={false}
        showBullets={true}
        autoPlay={true}
        slideInterval={4000}
        style={{ width: "100%" }}
        renderItem={renderItem}
      />
    </div>
  );
};

export default Carousel;

const renderItem = (item) => {
  return (
    <div className="image-gallery-image">
      <img
        src={item.original}
        alt={item.originalAlt}
        srcSet={item.srcSet}
        sizes={item.sizes}
        style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', maxHeight: '100%' }}
      />
    </div>
  );
};