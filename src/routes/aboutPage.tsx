//Import For React
import { motion } from "motion/react";
// Import For Components
import { Cuadros, Nav } from "../components/";
// Import For Assets
import mentorsImg from "../assets/img/mentors.png";
import mentorsPdf from "../assets/pdf/Mentors.pdf";

// Export For AboutPage
export default function AboutPage() {
  return (
    // Animación
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      {/* Cuadros */}
      <Cuadros />
      {/* About */}
      <div className="max-w-11/12 mx-auto mt-14 text-center">
        <h2 className="text-lg font-bold">About</h2>
        <p className="mx-4 mt-6 text-sm">
          🧑‍💻 I'm a web programmer with a solid foundation in front-end
          development, passionate about creating efficient andd engaging
          solutions for the web.
        </p>
      </div>
      {/* Certifications*/}
      <h2 className="mt-16 text-md text-center font-bold">Certifications</h2>
      <div className="relative mt-6 z-5">
        <a href={mentorsPdf} download={true}>
          <img
            className="size-22 mx-auto"
            src={mentorsImg}
            alt="Mentor Certification"
          />
        </a>
      </div>
      {/* Goals */}
      <h2 className="mt-16 ext-md text-center font-bold">Goals</h2>
      <div className="mt-6 text-sm text-center">
        <ul>
          <li>* Becoming a good full-stack developer</li>
          <li>* Becoming a complete software engineer</li>
        </ul>
      </div>
      {/* NavBar */}
      <Nav />
    </motion.div>
  );
}
