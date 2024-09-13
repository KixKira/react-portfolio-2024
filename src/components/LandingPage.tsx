import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { PLANS } from "../constants";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-8">
      <Navbar />
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg"
          >
            Encuentra el plan perfecto para tus necesidades. Ofrecemos una
            variedad de opciones para adaptarnos a tu presupuesto y objetivos.
          </motion.p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-bold mb-10"
        >
          Planes de Servicios
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-8">
          {PLANS.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3"
              key={index}
            >
              <h2 className="text-2xl font-semibold text-[#FF0000]">
                {plan.title}
              </h2>
              <div className="mb-4">
                <span className="text-gray-500 line-through mr-2">
                  ${plan.price}
                </span>
                <span className="text-2xl font-semibold text-green-500">
                  ${plan.disc}
                </span>
              </div>
              <ol className="list-disc list-inside mb-5">
                {plan.desc.map((item, itemIndex) => (
                  <li key={itemIndex} className=" text-[#070605]">
                    {item}
                  </li>
                ))}
              </ol>
              <a
                href={`https://wa.me/+584243320565?text=Hola%20KixKira.%20Estoy%20interesado%20en%20el%20plan%20*${plan.title}*`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Contactar por WhatsApp
              </a>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12 mb-12">
          <a
            href="https://www.facebook.com/profile.php?id=61564566646979/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-3xl mr-5" />
          </a>
          <a
            href="https://github.com/KixKira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl mr-5" />
          </a>
          <a
            href="https://www.instagram.com/kixkira.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareInstagram className="text-3xl mr-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kixkira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl mr-5" />
          </a>
          <a
            href="https://x.com/KixKira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className="text-3xl mr-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
