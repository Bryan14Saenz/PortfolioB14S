// Import For React
import { useEffect, useState } from "react";
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

export const Nav = () => {
  // State
  const [btnNav, setBtnNav] = useState("open");

  // Change Icon Nav
  const toggleIcon = () => {
    setBtnNav((prevSection) => (prevSection === "open" ? "close" : "open"));
  };

  // Change Width Nav
  useEffect(() => {
    const handleWidth = () => {
      const navbar = document.querySelector(".navbar");

      if (navbar) {
        navbar.style.width = btnNav === "open" ? "70px" : "200px";
      }
    };

    handleWidth();
  }, [btnNav]);

  return (
    <nav className="mt-40">
      <Button className="hidden md:block" onClick={toggleIcon}>
        {btnNav === "open" ? <IoClose /> : <IoMenu />}
      </Button>
      <ul className="flex items-center justify-center gap-6 text-2xl">
        <li>
          <Link to="/">
            <FaHome />
            <span className="hidden md:block">Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/techPage">
            <IoCodeSlash />
            <span className="hidden md:block">Habilidades</span>
          </Link>
        </li>
        <li>
          <Link to="/projectsPage">
            <AiOutlineProduct />
            <span className="hidden md:block">Proyectos</span>
          </Link>
        </li>
        <li>
          <Link to="/aboutPage">
            <AiOutlineIdcard />
            <span className="hidden md:block">Sobre mí</span>
          </Link>
        </li>
        <li>
          <Link to="/contactPage">
            <IoChatbubbleEllipsesOutline />
            <span className="hidden md:block">Contacto</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
