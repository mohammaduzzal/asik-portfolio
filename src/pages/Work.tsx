import { motion } from "framer-motion";

const services = [
  {
    title: "📣 Digital Marketing",
    offer: [
      "Facebook Ads",
      "Google Ads",
      "Retargeting",
      "Conversion Tracking",
    ],
    process: [
      "Business goal analysis",
      "Audience research",
      "Campaign setup",
      "Performance tracking",
    ],
    tips: [
      "Retargeting can recover up to 70% of lost visitors",
      "Always define a clear CTA before launching an ad",
      "A/B testing helps optimize ad performance over time",
    ],
  },
  {
    title: "🎥 YouTube SEO",
    offer: [
      "Channel optimization",
      "Keyword targeting",
      "Thumbnail/title setup",
    ],
    process: [
      "Niche research",
      "Competitor analysis",
      "Optimization",
      "Monitoring growth",
    ],
    tips: [
      "First 48 hours of a video are crucial for reach",
      "Clickable thumbnails improve CTR significantly",
      "Consistent uploads boost channel authority",
    ],
  },
  {
    title: "🌐 Website Design & Fixing",
    offer: [
      "Responsive design",
      "UI/UX optimization",
      "Speed improvement",
    ],
    process: [
      "Website audit",
      "Design or bug fixing",
      "Mobile optimization",
      "Final testing",
    ],
    tips: [
      "A website should load in under 3 seconds",
      "Clean design improves user experience and trust",
      "Mobile-first design is now a necessity, not an option",
    ],
  },
  {
    title: "🎨 Graphics Design",
    offer: [
      "Brand logos",
      "YouTube thumbnails",
      "Social media designs",
    ],
    process: [
      "Brand understanding",
      "Design draft",
      "Feedback",
      "Final delivery",
    ],
    tips: [
      "Consistent branding builds recognition",
      "A clear focal point in a thumbnail boosts engagement",
      "Simplicity and balance make designs stand out",
    ],
  },
  {
    title: "✍️ Content Strategy",
    offer: [
      "Strategic planning",
      "Content calendar",
      "Copywriting",
    ],
    process: [
      "Target research",
      "Strategy creation",
      "Publishing",
    ],
    tips: [
      "Quality beats quantity in content",
      "Use storytelling to connect",
      "Evergreen content brings long-term traffic",
    ],
  },
];

const Work = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20" id="work">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">💼 Our Work Process</h2>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
          A clear process tailored to deliver measurable results.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

            <div className="mb-4">
              <h4 className="font-medium">What We Offer:</h4>
              <ul className="list-disc ml-5 text-sm mt-1">
                {service.offer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-medium">How We Work:</h4>
              <p className="text-sm mt-1">
                {service.process.join(" → ")}
              </p>
            </div>

            <div>
              <h4 className="font-medium">Tips & Insights:</h4>
              <ul className="list-disc ml-5 text-sm mt-1">
                {service.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
