/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Years Experience", value: 5 },
  { label: "Projects Completed", value: 100 },
  { label: "Clients Worldwide", value: 20 },
  { label: "Design Campaigns", value: 50 },
];

interface CounterProps {
  to: number;
}

const Counter = ({ to }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", latest => {
      setDisplay(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [to]);

  return <span>{display}+</span>;
};


const Stats = () => {
  return (
    <section id="stats" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <div className="bg-white dark:bg-black rounded-xl p-6 space-y-2">
              <p className="text-3xl font-bold">
                <Counter to={item.value} />
              </p>
              <p className="text-sm">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
