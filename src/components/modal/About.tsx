import { motion , easeOut} from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
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
           About
        </motion.h2>

        <motion.p className="text-base text-center md:text-lg leading-relaxed">
          Hi, I’m <strong>Ashikuzzaman Rokon</strong>, a passionate Digital Marketing Specialist and Creative Graphic Designer with over 5 years of experience helping businesses, creators, and entrepreneurs build a strong online presence.
        </motion.p>

        <motion.p className="text-base text-center md:text-lg leading-relaxed">
          I’m also the founder of <strong>Creova</strong>, a digital agency where creativity meets strategy. My mission is simple: to craft data-driven marketing strategies combined with visually compelling designs that drive real growth, engage audiences, and convert traffic into loyal customers.
        </motion.p>

        <motion.p className="text-base text-center md:text-lg leading-relaxed">
         Over the years, I’ve successfully completed 100+ projects across various industries, working with both startups and established brands from around the world. From designing brand identities to managing targeted YouTube growth campaigns, I ensure every project delivers measurable results.
        </motion.p>
        <motion.p className="text-base text-center md:text-lg leading-relaxed">
         If you're looking for someone who values professionalism, creativity, and results, and knows how to grow your brand effectively in the digital space.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
