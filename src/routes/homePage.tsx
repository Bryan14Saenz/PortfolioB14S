//Import For React
import { motion } from "motion/react";
// Import For Components
import { Enlaces, Nav } from "../components/";
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
      {/* Enlaces Redes */}
      <h1 className="flex justify-center items-center gap-2 mt-8 text-xl md:mt-12 md:text-2xl lg:w-1/2 xl:text-3xl animate-pulse duration-500">
        <FaCode />
        <span>B14S</span>
      </h1>
      <Enlaces />
      {/* Bio */}
      <div className="mt-32 md:flex md:justify-center md:items-center md:mt-46 md:gap-8 lg:mt-32 xl:mt-46">
        <img
          className="size-36 mx-auto rounded-full md:mx-0 xl:size-38"
          src={imgBryan}
          alt="Bryan Sanchez"
        />
        <h2 className="max-w-64 mx-auto mt-6 text-xl text-center md:mx-0 md:mt-0 md:text-2xl xl:max-w-72 xl:text-3xl">
          Welcome I'm <span className="font-bold">Bryan Sanchez</span> Front-end
          Developer
        </h2>
      </div>
      {/* Hello World */}
      <h2 className="helloWorld max-w-48 mx-auto mt-32 text-2xl text-center font-bold tracking-widest md:mt-46 lg:mt-36 xl:max-w-70 xl:mt-46 xl:text-3xl">
        Hello World...
      </h2>
      {/* NavBar */}
      <Nav />
    </motion.div>
  );
}
