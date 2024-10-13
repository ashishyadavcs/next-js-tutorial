import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function Carousel() {
    const NextArrow = (props) => (
        <button {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
            </svg>
        </button>
    );
    const PrevArrow = (props) => (
        <button {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
            </svg>
        </button>
    );

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <StyledSlider className="slider-container">
            <Slider {...settings}>
                {[...Array(10)].map((el, i) => (
                    <Image
                        className="image"
                        key={i}
                        src={"/images/coder-girl.jpg"}
                        height={300}
                        width={150}
                        alt="girl"
                    />
                ))}
            </Slider>
        </StyledSlider>
    );
}

export default Carousel;
const StyledSlider = styled.div`
    margin: 50px 0 0;
    overflow: hidden;
    padding: 0 0 100px;
    .slick-slider {
        padding: 0 50px;
    }
    .slick-track {
        display: flex;
        gap: 20px;
        .image {
            border-radius: 8px;
            object-fit: cover;
        }
    }
    .slick-arrow {
        z-index: 2;
        background: #000;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        &::before {
            content: none;
        }
        svg {
            stroke: #fff;
            width: 18px;
        }
        &.slick-prev {
            left: 20px;
        }
        &.slick-next {
            right: 20px;
        }
    }
    .slick-dots {
        bottom: -45px;
        left: 50%;
        transform: translateX(-50%);
        li {
            @media screen and (max-width: 767px) {
                margin: 0;
            }
            button {
                &::before {
                    font-size: 16px;
                    color: blue;
                }
            }
        }
    }
`;
