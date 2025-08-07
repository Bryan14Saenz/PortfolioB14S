// Import For React Icons
import { VscCode } from "react-icons/vsc";
import {
  SiNetlify,
  SiEsbuild,
  SiEslint,
  SiJquery,
  SiPnpm,
  SiPrettier,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaGit,
  FaFigma,
  FaNpm,
  FaBootstrap,
  FaSass,
  FaReact,
} from "react-icons/fa";

// Interface For Carousel
export interface Item {
  key: number;
  icon: React.ReactNode;
}

// Interface Settings
export interface Settings {
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
  dots: boolean;
  infinite: boolean;
  pauseOnHover: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  rtl?: boolean;
}

// Export For Carousel
export const carruselTools: Item[] = [
  { key: 1, icon: <VscCode /> },
  { key: 2, icon: <FaGit /> },
  { key: 3, icon: <FaGithub /> },
  { key: 4, icon: <SiNetlify /> },
  { key: 5, icon: <FaFigma /> },
];

export const carruselFrontend: Item[] = [
  { key: 1, icon: <FaHtml5 /> },
  { key: 2, icon: <FaCss3 /> },
  { key: 3, icon: <FaJs /> },
  { key: 4, icon: <SiTypescript /> },
  { key: 5, icon: <FaNpm /> },
  { key: 6, icon: <SiPnpm /> },
  { key: 7, icon: <SiEslint /> },
  { key: 8, icon: <SiPrettier /> },
  { key: 9, icon: <SiVite /> },
  { key: 10, icon: <SiEsbuild /> },
  { key: 11, icon: <FaBootstrap /> },
  { key: 12, icon: <SiTailwindcss /> },
  { key: 13, icon: <FaSass /> },
  { key: 14, icon: <SiJquery /> },
  { key: 15, icon: <FaReact /> },
];
