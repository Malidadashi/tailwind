import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import firstlay from '../../assets/firstlay.jpg'
import secondlay from '../../assets/secondlay.jpg'
import thirdlay from '../../assets/thirdlay.jpg'
import forthlay from '../../assets/forthlay.jpg'
import fifthlay from '../../assets/fifthlay.jpg'

const Aboutme = (image,title,text,seeMore) => {
    const slides = [
        {
            image: firstlay ,
            title: 'Slide 1',
            text: 'Description of slide 1',
            seeMoreLink: 'https://example.com/see-more-1',
        },
        {
            image: secondlay,
            title: 'Slide 2',
            text: 'Description of slide 2',
            seeMoreLink: 'https://example.com/see-more-2',
        },
        {
            image: thirdlay,
            title: 'Slide 3',
            text: 'Description of slide 3',
            seeMoreLink: 'https://example.com/see-more-3',
        },
        {
            image: forthlay,
            title: 'Slide 3',
            text: 'Description of slide 3',
            seeMoreLink: 'https://example.com/see-more-3',
        },
        {
            image: fifthlay,
            title: 'Slide 3',
            text: 'Description of slide 3',
            seeMoreLink: 'https://example.com/see-more-3',
        },
        // Add more slides as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index}>
                    <img src={slide.image} alt={slide.title} width={'700px'} height={'250px'} />
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                    <a href={slide.seeMoreLink} target="_blank" rel="noopener noreferrer">
                        See More
                    </a>
                </div>
            ))}
        </Slider>
    );
};

export default Aboutme;
