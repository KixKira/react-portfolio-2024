import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import Logo from "../assets/KK.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={Logo} alt="KixKira Logo" className="mx-2 w-14" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link
          to="/landing-page"
          className="bg-[#FF0000] hover:bg-[#ff00005b] text-white font-bold py-2 px-4 rounded"
        >
          Planes
        </Link>
        <a
          href="https://www.facebook.com/profile.php?id=61564566646979/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/KixKira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/kixkira.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/kixkira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/KixKira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
