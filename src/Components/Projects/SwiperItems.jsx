import React from 'react';
import { SwiperSlide } from 'swiper/react';

function SwiperItems({ title, image, text, seeMore }) {
  return (
    <SwiperSlide>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={seeMore}>See More</a>
    </SwiperSlide>
  );
}

export default SwiperItems;
