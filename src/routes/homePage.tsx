//Import For Motion React
import { motion } from "motion/react";
// Import For Components
import { Cuadros, Enlaces, Nav } from "../components/";
// Import For Icons
import { FaCode } from "react-icons/fa";
// Import Img
import imgBryan from "../assets/img/bryanSanchez.png";
// Import For Style
import "../styles/home.scss";

// Export For HomePage
export default function HomePage() {
  return (
    // Animación
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      {/* Cuadros */}
      <Cuadros />
      {/* Enlaces Redes */}
      <h1 className="relative flex justify-center items-center gap-2 mt-14 z-5 text-base animate-pulse duration-500 md:text-lg md:gap-4 md:mt-18 lg:w-2/3 lg:text-xl">
        <FaCode />
        <span>B14S</span>
      </h1>
      <Enlaces darkMode={true} />
      {/* Bio */}
      <div className="relative mt-32 z-5 md:flex md:justify-center md:items-center md:gap-6 md:mt-36 lg:mt-34">
        <img
          className="size-34 mx-auto rounded-full md:size-36 md:mx-0"
          src={imgBryan}
          alt="Bryan Sanchez"
        />
        <h2 className="max-w-44 mx-auto mt-6 text-sm text-center md:max-w-46 md:mx-0 md:mt-0 md:text-base lg:text-lg">
          Welcome I'm <span className="font-bold">Bryan Sanchez</span> Front-end
          Developer
        </h2>
      </div>
      {/* Hello World */}
      <h2 className="helloWorld relative max-w-32 mx-auto mt-28 z-5 text-sm text-center font-bold tracking-widest md:text-base md:mt-36 lg:text-lg lg:max-w-38">
        Hello World...
      </h2>
      {/* NavBar */}
      <Nav />
    </motion.div>
  );
}
