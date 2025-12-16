"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {carouselImages} from "../dummyData/data"

import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import Image from "next/image";

export default function CustomCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

    <Slider {...settings} className="main-carousel">
        {carouselImages.map((img,index)=>{
            return(
                <Box key={index}>
                    <Image className="w-screen h-[80vh] object-cover" src={img} alt="img" width={1000} height={1000} />
                </Box>
            )
        })}
    </Slider>

  );
}