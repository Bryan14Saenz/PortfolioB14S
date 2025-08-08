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
      <div className="max-w-11/12 mx-auto mt-14 text-center md:mt-18 lg:mt-10">
        <h2 className="text-base font-bold md:text-lg lg:text-xl">About</h2>
        <p className="mx-4 mt-6 text-sm md:max-w-2/3 md:mx-auto md:mt-12 md:text-base lg:max-w-2/4 lg:mt-8 lg:text-lg">
          🧑‍💻 I'm a web programmer with a solid foundation in front-end
          development, passionate about creating efficient andd engaging
          solutions for the web.
        </p>
      </div>
      {/* Certifications*/}
      <h2 className="mt-16 text-base text-center font-bold md:mt-20 md:text-lg lg:mt-12 lg:text-xl">Certifications</h2>
      <div className="relative mt-6 z-5 md:mt-10 lg:mt-8">
        <a href={mentorsPdf} target="_blank">
          <img
            className="size-22 mx-auto md:size-24 lg:size-28"
            src={mentorsImg}
            alt="Mentor Certification"
          />
        </a>
      </div>
      {/* Goals */}
      <h2 className="mt-16 text-base text-center font-bold md:mt-20 md:text-lg lg:mt-12 lg:text-xl">Goals</h2>
      <div className="mt-6 text-sm text-center md:text-base lg:mt-8">
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
