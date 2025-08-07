import { motion, easeOut } from "framer-motion";

const allMembers = [
  {
    name: "Ashikuzzaman Rokon",
    role: "Founder, Creova | Digital Marketer & YouTube SEO Expert",
    img: "https://i.ibb.co.com/zTqCB1H0/Whats-App-Image-2025-08-07-at-23-28-46-a0a7af1b.jpg",
    des:"Ashikuzzaman Rokon is the founder of Creova and a seasoned digital marketer specializing in YouTube SEO. With a strong focus on online growth and brand visibility, he helps clients boost their presence through result-driven marketing strategies. His goal is to deliver measurable success through smart and ethical digital solutions."
  },
  {
    name: "Mohammad Uzzal",
    role: "Full Stack MERN Developer",
    img: "https://i.ibb.co.com/2YKZKXSh/Whats-App-Image-2025-08-07-at-23-28-46-37916f53.jpg",
    des:"Uzzal is a skilled full-stack web designer who builds responsive, high-performance websites with clean user interfaces. He also solves technical issues like site lag and design inconsistencies, ensuring smooth and professional web experiences for clients. His work reflects efficiency, clarity, and a deep understanding of user needs."
  },
  {
    name: "Shafique Islam",
    role: "Graphic Designer",
    img: "https://i.ibb.co.com/1G4SNvRF/Whats-App-Image-2025-08-07-at-23-28-47-55f13bad.jpg",
    des:"Shofique Islam creates visually compelling designs that align with brand identity and audience appeal. From logos and YouTube thumbnails to social media creatives, his designs are sharp, modern, and thoughtfully crafted. His work helps brands stand out with clarity and confidence across all digital platforms."
  },
  {
    name: "Sohel Rana",
    role: "Content Strategist & Social Media Manager",
    img: "https://i.ibb.co.com/jP2PdtdG/Whats-App-Image-2025-08-07-at-23-28-46-be5b11e2.jpg",
    des:"Md Sohel Rana specializes in content strategy and social media management. He develops audience-focused content plans and manages brand presence across platforms with consistency and engagement in mind. His strategic approach helps businesses grow their reach, build community, and stay relevant in today’s fast-paced digital landscape."
  },
];

const teamHead = allMembers[0];
const teamMembers = allMembers.slice(1);

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
  }),
};

const Team = () => {
  return (
    <section id="team" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">🤝 Meet Our Team</h2>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
          We're a dedicated group of professionals passionate about helping your business succeed.
        </p>
      </motion.div>

      {/* Team Head - Standalone */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={cardVariant}
        className="p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 text-center max-w-sm mx-auto mb-12"
      >
        <img
          src={teamHead.img}
          alt={teamHead.name}
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold mb-1">{teamHead.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{teamHead.role}</p>
        <p className="text-sm text-gray-600 mb-4">{teamHead.des}</p>
      </motion.div>

      {/* Other Members in Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={cardVariant}
            className="p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-20 h-20 mx-auto rounded-full object-fill mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{member.role}</p>
            <p className="text-sm text-gray-600 mb-4">{member.des}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
