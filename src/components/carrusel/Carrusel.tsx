// Import React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import For Services
import type { Item, Settings } from "../../services/icons";

// Interface CarouselProps
interface CarouselProps {
  carrusel: Item[];
  className?: string;
  settings?: Settings;
}

// Carrusel Component
export const Carrusel = ({ carrusel, className, settings }: CarouselProps) => {
  return (
    <Slider {...settings} className={className}>
      {carrusel.map((item) => (
        <div key={item.key}>{item.icon}</div>
      ))}{" "}
    </Slider>
  );
};
