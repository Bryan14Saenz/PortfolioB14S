// Import For React
import { useEffect, useState } from "react";
// Import For Component
import { Button } from "../button/Button";
// Import For Services
import { redes } from "../../services/redes";
// Import For PDF
import curriculum from "../../assets/pdf/Curriculum.pdf";
// Import For Icons
import {
  FaFacebook,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMoon,
  FaSun,
} from "react-icons/fa";

// Enlace Component
export const Enlaces = () => {
  // State
  const [colorMode, setColorMode] = useState("dark");

  // Change Icon Color
  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  // Change Color Body
  useEffect(() => {
    const handleColor = () => {
      if (colorMode === "dark") {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
      } else {
        document.body.style.backgroundColor = "#eee";
        document.body.style.color = "#000";
      }
    };

    handleColor();
  }, [colorMode]);

  return (
    // Enlaces Redes
    <ul className="enlaces flex justify-center items-center h-12 mt-4 gap-4 text-lg md:mt-8 md:gap-8 md:text-xl lg:w-1/2 xl:text-2xl">
      <li className="hover:scale-110 transition-all duration-500">
        <a href={redes.facebook} target="_blank">
          <FaFacebook />
        </a>
      </li>
      <li className="hover:scale-110 transition-all duration-500">
        <a href={redes.twitter} target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li className="hover:scale-110 transition-all duration-500">
        <a href={redes.linkedIn} target="_blank">
          <FaLinkedin />
        </a>
      </li>
      <li className="hover:scale-110 transition-all duration-500">
        <a href={redes.github} target="_blank">
          <FaGithub />
        </a>
      </li>
      <li className="hover:scale-110 transition-all duration-500">
        <a href={curriculum} download={true}>
          <FaFilePdf />
        </a>
      </li>
      {/* Botón Cambiar Modo */}
      <li className="h-1/2 hover:scale-110 transition-all duration-500">
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <FaMoon /> : <FaSun />}
        </Button>
      </li>
    </ul>
  );
};
