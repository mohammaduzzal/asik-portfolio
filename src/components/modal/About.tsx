import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false}}
        variants={containerVariants}
        className="space-y-6 text-center md:text-left"
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center">
           About Me
        </motion.h2>

        <motion.p className="text-base text-center md:text-lg leading-relaxed">
          Hi, I’m <strong>Ashikuzzaman Rokon</strong>, a passionate Digital Marketing Specialist and Creative Graphic Designer with over 5 years of experience helping businesses, creators, and entrepreneurs grow their brands online.
        </motion.p>

        <motion.p className="text-base text-center md:text-lg leading-relaxed">
          As the founder of <strong>Creova</strong>, I blend strategic thinking with eye-catching visuals to deliver real results — whether it's building brand awareness, increasing engagement, or boosting conversions.
        </motion.p>

        <motion.p className="text-base text-center md:text-lg leading-relaxed">
          I work globally with clients who value professionalism, creativity, and results.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
