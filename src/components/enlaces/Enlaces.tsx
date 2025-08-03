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
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
      }
    };

    handleColor();
  }, [colorMode]);

  return (
    // Enlaces Redes
    <ul className="flex justify-center items-center gap-6 my-4 h-12 text-2xl">
      <li>
        <a href={redes.facebook} target="_blank">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href={redes.twitter} target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href={redes.linkedIn} target="_blank">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href={redes.github} target="_blank">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href={curriculum} download={true}>
          <FaFilePdf />
        </a>
      </li>
      {/* Botón Cambiar Modo */}
      <li className="max-h-2/4">
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <FaMoon /> : <FaSun />}
        </Button>
      </li>
    </ul>
  );
};
