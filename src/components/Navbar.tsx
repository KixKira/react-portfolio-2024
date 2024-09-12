import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import Logo from "../assets/KK.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={Logo} alt="KixKira Logo" className="mx-2 w-14" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaFacebook />
        <FaGithub />
        <FaSquareInstagram />
        <FaLinkedin />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
