import { motion, easeOut } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Founder, Bloom Digital",
    image: "https://i.ibb.co.com/qF9tjn3q/Whats-App-Image-2025-08-07-at-18-16-55-360b0d44.jpg",
    feedback:
      "Working with Rokon was a game-changer! His marketing strategy helped triple our engagement within weeks.",
  },
  {
    name: "James Miller",
    role: "Creative Director, Designify",
    image: "https://i.ibb.co.com/m5FF0pgK/Whats-App-Image-2025-08-07-at-18-16-55-ce853f89.jpg",
    feedback:
      "His designs are sharp, professional, and always on-brand. Can't wait to collaborate again!",
  },
  {
    name: "Jonathon",
    role: "Entrepreneur",
    image: "https://i.ibb.co.com/KpsX3pPS/Whats-App-Image-2025-08-07-at-18-16-55-82273ce6.jpg",
    feedback:
      "Very professional and truly understands what your business needs. My brand never looked better.",
  },
  {
    name: "Alicia Morgan",
    role: "Marketing Director, UrbanNest Properties (Toronto, Canada)",
    image: "https://i.ibb.co.com/1fZT6J5G/Whats-App-Image-2025-08-07-at-18-16-54-9c5b6ff7.jpg",
    feedback:
      "Rokon's attention to detail and strategic thinking helped elevate our brand visibility significantly.",
  },
  {
    name: "Jason Reed",
    role: "Head Trainer, Coreline Fitness Club (Austin, Texas, USA)",
    image: "https://i.pravatar.cc/100?img=4",
    feedback:
      "His creativity in promoting our club brought in a fresh wave of new members. Highly recommended!",
  },
  {
    name: "Emily Carter",
    role: "Founder & Life Coach, FocusEdge Coaching (London, UK)",
    image: "https://i.pravatar.cc/100?img=5",
    feedback:
      "Rokon's guidance helped clarify our brand message and connect more deeply with our audience.",
  },
  {
    name: "Van Dijk",
    role: "Creative Director, ModaMuse Apparel (Amsterdam, Netherlands)",
    image: "https://i.pravatar.cc/100?img=6",
    feedback:
      "He perfectly captured the essence of our fashion brand — modern, bold, and unique.",
  },
  {
    name: "Markus Klein",
    role: "Program Manager, Skillora Academy (Berlin, Germany)",
    image: "https://i.pravatar.cc/100?img=7",
    feedback:
      "Working with Rokon streamlined our outreach and brought measurable growth in course signups.",
  },
  {
    name: "Olivia Bennett",
    role: "Co-Founder, Purehaven Naturals (Sydney, Australia)",
    image: "https://i.ibb.co.com/M5JHKt8s/Whats-App-Image-2025-08-07-at-18-16-54-c7a112b5.jpg",
    feedback:
      "His branding work gave our eco products a refreshing, modern identity. Couldn't be happier.",
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
