//Import For React
import { motion } from "motion/react";
// Import For Components
import { Cuadros, Nav, Carrusel } from "../components/";
// Import For Services
import {
  carruselFrontend,
  carruselTools,
  type Settings,
} from "../services/icons";
// Import For Style
import "../styles/tech.scss";

// Settings For Carousel
const settings: Settings = {
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  infinite: true,
  pauseOnHover: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 1,
};

// Settings For Carousel
const settings2: Settings = {
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  infinite: true,
  pauseOnHover: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  rtl: true,
};

// Export For TechPage
export default function TechPage() {
  return (
    // Animación
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      {/* Cuadros */}
      <Cuadros />
      {/* Tech */}
      <h2 className="mt-14 text-base text-center font-bold md:mt-18 md:text-lg lg:mt-14 lg:text-xl">Technology</h2>
      {/* Herramientas */}
      <h2 className="mt-16 text-sm text-center font-bold md:mt-20 md:text-base lg:mt-16 lg:text-lg">Tools</h2>
      <Carrusel
        className="relative cursor-pointer w-2/3 mx-auto mt-8 z-5 md:w-2/4 md:mt-12 lg:w-2/5 lg:mt-6"
        settings={settings}
        carrusel={carruselTools}
      />
      {/* Front-end */}
      <h2 className="mt-16 text-sm text-center font-bold md:mt-20 md:text-base lg:mt-16 lg:text-lg">Front-end</h2>
      <Carrusel
        className="relative cursor-pointer w-2/3 mx-auto mt-10 mb-2 z-5 md:w-2/4 md:mt-12 lg:w-2/5 lg:mt-6"
        settings={settings2}
        carrusel={carruselFrontend}
      />
      {/* Back-end */}
      <h2 className="mt-16 text-sm text-center font-bold md:mt-20 md:text-base lg:mt-16 lg:text-lg">Back-end</h2>
      <p className="mt-10 text-center md:mt-12 lg:mt-6">Coming soon...</p>
      {/* NavBar */}
      <Nav />
    </motion.div>
  );
}
