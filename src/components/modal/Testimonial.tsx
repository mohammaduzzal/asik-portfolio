import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Founder, Bloom Digital",
    image: "https://i.pravatar.cc/100?img=1",
    feedback:
      "Working with Rokon was a game-changer! His marketing strategy helped triple our engagement within weeks.",
  },
  {
    name: "James Miller",
    role: "Creative Director, Designify",
    image: "https://i.pravatar.cc/100?img=2",
    feedback:
      "His designs are sharp, professional, and always on-brand. Can't wait to collaborate again!",
  },
  {
    name: "Elena Garcia",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/100?img=3",
    feedback:
      "Very professional and truly understands what your business needs. My brand never looked better.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i:number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">💬 Testimonials</h2>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
          What my clients say about working with me.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={cardVariant}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-base">{item.name}</h4>
                <p className="text-sm">{item.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">"{item.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
