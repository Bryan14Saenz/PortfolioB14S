//Import For Motion React
import { motion } from "motion/react";
// Import For Components
import { Cuadros, Nav, Filter, Cards, Button } from "../components";
// Import For Context
import { useFilterContext } from "../context/FilterContext";
// Import For Style
import "../styles/projects.scss";

// Export For ProjectsPage
export default function ProjectsPage() {
  // Context
  const { handlePrev, handleNext } = useFilterContext();

  return (
    // Animación
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      {/* Cuadros */}
      <Cuadros />
      {/* Projects */}
      <h2 className="mt-14 text-base text-center font-bold md:mt-18 md:text-lg lg:mt-10 lg:text-xl">Projects</h2>
      <Filter />
      {/* Carrusel */}
      <div className="relative flex items-center justify-center mt-8 md:mt-12 lg:mt-4">
        {/* Btn Prev */}
        <Button className="prev" onClick={handlePrev}>
          &#8249;
        </Button>
        {/* Cards Repo */}
        <Cards />
        {/* Btn Next */}
        <Button className="next" onClick={handleNext}>
          &#8250;
        </Button>
      </div>
      {/* NavBar */}
      <Nav />
    </motion.div>
  );
}
