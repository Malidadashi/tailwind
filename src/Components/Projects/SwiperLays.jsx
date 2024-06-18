import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperItems from './SwiperItems'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SwiperLays() {
  const slides = [
    {
      title: 'Slide 1',
      image: 'https://example.com/image1.jpg',
      text: 'This is the text for Slide 1.',
      seeMore: 'https://example.com/slide1',
    },
    {
      title: 'Slide 2',
      image: '',
      text: 'This is the text for Slide 2.',
      seeMore: 'https://example.com/slide2',
    },
    {
      title: 'Slide 3',
      image: 'https://example.com/image3.jpg',
      text: 'This is the text for Slide 3.',
      seeMore: 'https://example.com/slide3',
    },
  ];

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      {slides.map((slide, index) => (
        <SwiperItems key={index} {...slide} />
      ))}
      
    </Swiper>
  );
}

export default SwiperLays;
