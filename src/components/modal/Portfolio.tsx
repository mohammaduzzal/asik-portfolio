import { motion, easeOut } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    desc: "Modern shopping experience with cart, wishlist, and payment gateway.",
    image: "https://via.placeholder.com/600x400", // replace with real image
    link: "#",
  },
  {
    title: "Task Manager App",
    desc: "Full-stack MERN app with drag-and-drop task management.",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
  {
    title: "Dental Care Website",
    desc: "Responsive website for a dental clinic with appointment booking.",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
  }),
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">📁 My Portfolio</h2>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
          Some of the recent works I've crafted with care and code.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={itemVariant}
            className="rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.desc}</p>
              <a
                href={project.link}
                className="inline-block font-medium underline underline-offset-4 hover:opacity-80 transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
