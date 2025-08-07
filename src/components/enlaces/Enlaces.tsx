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

// Interface EnlacesProps
interface EnlacesProps {
  darkMode?: boolean;
}

// Enlaces Component
export const Enlaces = ({ darkMode }: EnlacesProps) => {
  // State
  const [colorMode, setColorMode] = useState(() => {
    const saveMode = localStorage.getItem("dark");
    return saveMode === "true";
  });

  // Change Icon Color
  const toggleColorMode = () => {
    setColorMode((prevMode) => !prevMode);
  };

  // Change Color Body
  useEffect(() => {
    const handleColor = () => {
      if (colorMode) {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
        localStorage.setItem("dark", "true");
      } else {
        document.body.style.backgroundColor = "#eee";
        document.body.style.color = "#000";
        localStorage.setItem("dark", "false");
      }
    };

    handleColor();
  }, [colorMode]);

  return (
    // Enlaces Redes
    <ul className="relative flex justify-center items-center h-12 mt-4 gap-6 z-5 text-lg">
      <li className="hover:scale-110 transition-transform duration-500">
        <a href={redes.facebook} target="_blank">
          <FaFacebook />
        </a>
      </li>
      <li className="hover:scale-110 transition-transform duration-500">
        <a href={redes.twitter} target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li className="hover:scale-110 transition-transform duration-500">
        <a href={redes.linkedIn} target="_blank">
          <FaLinkedin />
        </a>
      </li>
      <li className="hover:scale-110 transition-transform duration-500">
        <a href={redes.github} target="_blank">
          <FaGithub />
        </a>
      </li>
      <li className="hover:scale-110 transition-transform duration-500">
        <a href={curriculum} download={true}>
          <FaFilePdf />
        </a>
      </li>
      {/* Botón Cambiar Modo */}
      <li className="h-1/2 hover:scale-110 transition-transform duration-500">
        {darkMode ? (
          <Button onClick={toggleColorMode}>
            {colorMode ? <FaMoon /> : <FaSun />}
          </Button>
        ) : (
          ""
        )}
      </li>
    </ul>
  );
};
