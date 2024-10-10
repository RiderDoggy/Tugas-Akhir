import "../style/carousel.css";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import '../style/carousel.css'
import { getCarouselItems } from "../api";
    
const CarouselS = () => {
      const [carousel, setCarousel] = useState([])
      useEffect(() =>{
        getCarouselItems().then(res => {
          setCarousel(res.images)
        })

      }, [])
    

  return (
    <div>
      <Carousel>
        {carousel?.map((image, i) => (
          <Carousel.Item key={i}>
            <img
              className="testimonialImages d-block w-100"
              src={image}
              alt=""
            />
            <Carousel.Caption>
              <h1>Selamat Datang di Website Desa Tanjungsari</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselS;
