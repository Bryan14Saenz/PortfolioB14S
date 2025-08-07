//Import For Motion React
import { motion } from "motion/react";
// Import For Components
import { Cuadros, Enlaces, Nav } from "../components/";
// Import For Services
import { redes } from "../services/redes";

// Export For ContactPage
export default function ContactPage() {
  return (
    // Animación
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      {/* Cuadros */}
      <Cuadros />
      {/* Contact */}
      <div className="relative flex flex-col justify-center z-5 max-w-3/4 mx-auto mt-32 p-4 gap-6 border border-[inherit] rounded-2xl text-center text-sm">
        <h2 className="font-bold">Let's talk</h2>
        <p>Program not to solve problems, but to create solutions</p>
        <a
          className="border border-[inherit] py-2 px-4 rounded-3xl"
          href={redes.email}
          target="_blank"
        >
          Sent Mail
        </a>
      </div>
      {/* Enlaces */}
      <div className="relative flex flex-col justify-center z-5 mt-18 mx-8 gap-2 text-center text-sm">
        <h3 className="font-bold text-lg">B14S</h3>
        <p>I learn and create every day</p>
        <Enlaces darkMode={false} />
        <p>
          Developer by{" "}
          <a href={redes.github} target="_blank">
            <b>Bryan14Saenz</b>
          </a>{" "}
          in React
        </p>
      </div>
      {/* NavBar */}
      <Nav />
    </motion.div>
  );
}
