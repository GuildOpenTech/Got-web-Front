import { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowNext from '../../../components/ArrowNext';

/**
 * @type {Settings}: Settings of the slider
 */
export const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <ArrowNext />,
  responsive: [
    {
      breakpoint: 2200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};