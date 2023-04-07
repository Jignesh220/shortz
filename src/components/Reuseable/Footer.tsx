import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [inView, setinView] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      onViewportEnter={() => {
        setinView(true);
      }}
      onViewportLeave={() => {
        setinView(false);
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeIn" },
            }
          : {}
      }
      className="p-3 bg-indigo-950"
    >
      <div className="font-varela text-center text-white">
        Copyright ©2023 Shortz
      </div>
    </motion.div>
  );
}
