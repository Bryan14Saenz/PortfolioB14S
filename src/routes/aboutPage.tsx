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
      <div className="text-center mt-10">
        <h2 className="text-md font-bold">About</h2>
        <p className="mx-4 mt-6 text-sm">
          🧑‍💻 I'm a web programmer with a solid foundation in front-end
          development, passionate about creating efficient andd engaging
          solutions for the web.
        </p>
      </div>
      {/* Certifications*/}
      <h2 className="mt-14 text-md text-center font-bold">Certifications</h2>
      <div className="mt-6">
        <a href={mentorsPdf} download={true}>
          <img
            className="size-18 mx-auto"
            src={mentorsImg}
            alt="Mentor Certification"
          />
        </a>
      </div>
      {/* Goals */}
      <h2 className="mt-14 ext-md text-center font-bold">Goals</h2>
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
