import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss"

const ImageCarousel = ({ imageUrls }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 5000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        className: 'project-image'
    };

    return (
        <Slider {...settings}>
            {imageUrls.map((imageUrl, index) => (
                <div key={index}>
                    <img src={imageUrl} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
};

export default ImageCarousel;
