// Import For React
import { useState } from "react";
// Import For React Router Dom
import { Link } from "react-router-dom";
// Import For Components
import { Button } from "../button/Button";
// Import For Icons
import { AiOutlineIdcard, AiOutlineProduct } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import {
  IoChatbubbleEllipsesOutline,
  IoClose,
  IoCodeSlash,
  IoMenu,
} from "react-icons/io5";

// Nav Component
export const Nav = () => {
  // State
  const [btnNav, setBtnNav] = useState("open");

  // Change Icon Nav
  const toggleIcon = () => {
    setBtnNav((prevSection) => (prevSection === "open" ? "close" : "open")); // Corregir
  };

  // Change Width Nav
  const toggleWidth = () => {
    const navbar = document.querySelector(".navbar") as HTMLElement;

    navbar.style.width = btnNav === "open" ? "220px" : "50px";
    toggleIcon();
  };

  return (
    <nav className="navbar mb-10 text-xl">
      <Button className="hidden" onClick={toggleWidth}>
        {btnNav === "open" ? <IoMenu /> : <IoClose />}
      </Button>
      <ul className="flex justify-center items-center gap-8">
        <li>
          <Link to="/">
            <FaHome />
            <span className={btnNav === "open" ? "hidden" : "block"}>
              Inicio
            </span>
          </Link>
        </li>
        <li>
          <Link to="/techPage">
            <IoCodeSlash />
            <span className={btnNav === "open" ? "hidden" : "block"}>
              Habilidades
            </span>
          </Link>
        </li>
        <li>
          <Link to="/projectsPage">
            <AiOutlineProduct />
            <span className={btnNav === "open" ? "hidden" : "block"}>
              Proyectos
            </span>
          </Link>
        </li>
        <li>
          <Link to="/aboutPage">
            <AiOutlineIdcard />
            <span className={btnNav === "open" ? "hidden" : "block"}>
              Sobre mí
            </span>
          </Link>
        </li>
        <li>
          <Link to="/contactPage">
            <IoChatbubbleEllipsesOutline />
            <span className={btnNav === "open" ? "hidden" : "block"}>
              Contacto
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
