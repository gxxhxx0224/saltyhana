import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel1 from "../../pages/LandingPage/Carousel1";
import Carousel2 from "../../pages/LandingPage/Carousel2";

export default function LandingSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3초마다 전환
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <Carousel1 />
      <Carousel2 />
    </Slider>
  );
}
