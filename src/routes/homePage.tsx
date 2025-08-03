//Import For React
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
      <h1 className="relative flex justify-center items-center gap-2 mt-10 text-md z-5 animate-pulse duration-500">
        <FaCode />
        <span>B14S</span>
      </h1>
      <Enlaces />
      {/* Bio */}
      <div className="relative mt-28 z-5">
        <img
          className="size-34 mx-auto rounded-full"
          src={imgBryan}
          alt="Bryan Sanchez"
        />
        <h2 className="max-w-44 mx-auto mt-6 text-md text-center">
          Welcome I'm <span className="font-bold">Bryan Sanchez</span> Front-end
          Developer
        </h2>
      </div>
      {/* Hello World */}
      <h2 className="helloWorld relative max-w-44 mx-auto mt-28 z-5 text-xl text-center font-bold tracking-widest">
        Hello World...
      </h2>
      {/* NavBar */}
      <Nav />
    </motion.div>
  );
}
