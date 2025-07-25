import { motion } from "framer-motion";

const formVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={formVariant}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">📬 Contact Me</h2>
        <p className="mt-4 text-base md:text-lg max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Let’s connect.
        </p>
      </motion.div>

      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={formVariant}
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          // handle your form logic here
          alert("Message sent! (You can integrate EmailJS or backend here)");
        }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2"
            required
          />
        </div>

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2"
          required
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 rounded-md font-semibold border border-gray-300 hover:shadow-md transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
