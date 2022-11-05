import React from 'react';
import img1 from '../../../../assets/images/homeCarousel/1.jpg';
import img2 from '../../../../assets/images/homeCarousel/2.jpg';
import img3 from '../../../../assets/images/homeCarousel/3.jpg';
import img4 from '../../../../assets/images/homeCarousel/4.jpg';

import BannerItem from '../BannerItem/BannerItem';

const bannerData = [
  {
    image: img1,
    prev: 4,
    id: 1,
    next: 2
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 1
  }
  
]

const Banner = () => {
  return (
    <div className="carousel container mx-auto my-20">
      {
        bannerData.map(slide => <BannerItem key={slide.id} slide={slide} />)
      }
    </div>
  );
};

export default Banner;