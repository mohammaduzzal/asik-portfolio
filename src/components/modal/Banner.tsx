import { motion } from "framer-motion";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { Button } from "../ui/button";

const name = "Asikuzzaman Rokon";

const letterVariants = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: (i: number) => ({
    opacity: 1,
    y: `0em`,
    transition: {
      delay: i * 0.05,
    },
  }),
};

const Banner = () => {
  return (
    <div className="min-h-52 md:min-h-96 flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-20">
      {/* Left: Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border-4 border-white"
      >
        <img
          src="https://i.ibb.co/ZRThsrt8/d76e7ad2-53e4-46a1-aa38-5688e9f50e8b.jpg" 
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right: Name, Skills, Socials */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-left"
      >
         <h1 className="text-3xl md:text-5xl font-bold  flex flex-wrap justify-center md:justify-start">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        <p className="text-lg md:text-xl mt-2">Digital Marketer & YouTube SEO Expert</p>
        <a href="https://drive.google.com/file/d/1kz82sbISdyjOmg7fLbdzK_4aj6yu40_X/view"><Button className="my-1">Resume</Button></a>
        <div className="flex justify-center md:justify-start gap-5 mt-4 text-2xl">
          <a href="https://www.linkedin.com/in/md-ashikuzzaman-rokon-b72a41253/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ashikuzzaman.rokon/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com/ArAshikuzzaman" target="_blank" rel="noreferrer">
            <FaXTwitter  />
          </a>
          <a href="https://wa.me/8801615721240?text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noreferrer">
           <FaWhatsapp />
          </a>
          <a href="https://www.pinterest.com/aashikuzzamanrokon/" target="_blank" rel="noreferrer">
           <FaPinterestSquare />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
