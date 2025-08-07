import { motion } from "framer-motion";
import { FaAd } from "react-icons/fa";
import {
    FaChartLine,
  FaGooglePlusG,
    FaPenNib,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineSocialDistance } from "react-icons/md";
import { SiAdobe, SiAdobeillustrator, SiCanva, SiCoinmarketcap } from "react-icons/si";

const skills = [
   { name: "Digital Marketing", icon: <SiCoinmarketcap size={28} /> },
   { name: "YouTube SEO", icon: <FaYoutube size={28} /> },
   { name: "Marketing Strategy", icon: <FaChartLine size={28} /> },
   { name: "Social Media Management", icon: <MdOutlineSocialDistance size={28} /> },
   { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={28}/> },
  { name: "Canva", icon: <SiCanva size={28} /> },
  { name: "Adobe XD", icon: <SiAdobe size={28} /> },
  { name: "Photoshop", icon: <FaPenNib size={28} /> },
  { name: "Google Analytics", icon: <FaGooglePlusG size={28} /> },
  { name: "Meta Ads", icon: <FaAd size={28} /> },
  
  
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">🧰 My Skills</h2>
        <p className="mt-4 max-w-xl mx-auto text-base md:text-lg">
          Tools and technologies I work with daily.
        </p>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 text-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            {skill.icon}
            <p className="text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
