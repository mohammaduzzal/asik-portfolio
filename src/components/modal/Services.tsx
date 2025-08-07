import { motion, easeOut } from "framer-motion";
import { FaBullhorn, FaGooglePlusG } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { CiPen } from "react-icons/ci";
import { MdContentPasteSearch } from "react-icons/md";

const services = [
  {
    icon: <FaBullhorn size={28} />,
    title: "Digital Marketing",
    desc: "Boost your brand visibility, traffic, and sales with data-driven strategies tailored to your business.",
  },
  {
    icon: <GrLineChart size={28} />,
    title: "You Tube SEO",
    desc: "Optimize your videos for better reach and grow your channel organically.",
  },
  {
    icon:<CiPen size={28} />,
    title: "Thumbnail Design",
    desc: "Eye-catching custom thumbnails designed to increase click-through rate (CTR), attract more viewers, and improve overall video performance.",
  },
  {
    icon: <FaGooglePlusG size={28} />,
    title: "Google Ads",
    desc: "Reach More Customers with Google Ads.Launch targeted ad campaigns that drive traffic, leads, and conversions.",
  },
  {
    icon: <FaPaintBrush size={28}/>,
    title: "Graphic Design",
    desc: "Crafting visually stunning designs that leave a lasting impression and connect with your audience.",
  },
  {
    icon: <MdContentPasteSearch size={28} />,
    title: "Content Strategy",
    desc: "Plan and structure content to boost engagement, improve SEO, and increase conversions across platforms.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
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
