import { motion } from "framer-motion";
import { FaBullhorn, FaChartLine } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaBullhorn size={28} />,
    title: "Digital Marketing",
    desc: "Boost your brand visibility, traffic, and sales with data-driven strategies tailored to your business.",
  },
  {
    icon: <FaPaintBrush size={28}/>,
    title: "Graphic Design",
    desc: "Crafting visually stunning designs that leave a lasting impression and connect with your audience.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Brand Strategy",
    desc: "Position your brand with clarity, confidence, and creativity to stand out in any market.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">🛠️ My Services</h2>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
          I help businesses grow through creativity, strategy, and performance. Here's what I offer:
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={cardVariant}
            className="p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
