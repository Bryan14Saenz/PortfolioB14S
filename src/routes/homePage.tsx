//Import For React
import { motion } from "motion/react";
// Import For Components
import { Enlaces, Nav } from "../components/";
// Import For Icons
import { FaCode } from "react-icons/fa";
// Import Img
import imgBryan from "../assets/img/bryanSanchez.png";

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
      <h1 className="flex items-center justify-center pt-16 gap-2 text-2xl font-bold ">
        <FaCode />
        <span>B14S</span>
      </h1>
      <Enlaces />
      {/* Bio */}
      <img
        className="w-30 mx-auto mt-30 rounded-full"
        src={imgBryan}
        alt="Bryan Sanchez"
      />
      <h2 className="flex flex-col items-center justify-center mb-30 mt-4 text-2xl font-bold text-balance">
        Welcome I'm <span>Bryan Sanchez</span> Front-end Developer
      </h2>
      {/* NavBar */}
      <Nav />
    </motion.div>
  );
}
