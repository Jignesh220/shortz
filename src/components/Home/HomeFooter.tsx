import React from "react";
import { motion } from "framer-motion";

export default function HomeFooter() {
  const [inView, setinView] = React.useState(false);
  const FooterBackground = () => {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="rounded-3xl"
      >
        <rect x="0" y="0" width="2700" height="950" fill="#002233"></rect>
        <path
          d="M0 618L64.3 645.3C128.7 672.7 257.3 727.3 385.8 731.5C514.3 735.7 642.7 689.3 771.2 674.3C899.7 659.3 1028.3 675.7 1157 666.2C1285.7 656.7 1414.3 621.3 1543 608.5C1671.7 595.7 1800.3 605.3 1928.8 633.7C2057.3 662 2185.7 709 2314.2 740.2C2442.7 771.3 2571.3 786.7 2635.7 794.3L2700 802L2700 951L2635.7 951C2571.3 951 2442.7 951 2314.2 951C2185.7 951 2057.3 951 1928.8 951C1800.3 951 1671.7 951 1543 951C1414.3 951 1285.7 951 1157 951C1028.3 951 899.7 951 771.2 951C642.7 951 514.3 951 385.8 951C257.3 951 128.7 951 64.3 951L0 951Z"
          fill="#0066FF"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
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
      className="mb-16"
    >
      <div className="mx-28 h-96 bg-slate-400 rounded-3xl center-v-h-flex relative">
        <FooterBackground />
        <div
          className="absolute min-w-full center-v-h-flex min-h-full rounded-3xl"
          style={{
            backdropFilter: "blur(3px)",
            backgroundColor: "#0000005a",
          }}
        >
          <div className="grid grid-flow-row gap-8">
            <div className="text-4xl text-white text-center font-bold font-varela">
              Better Video Lead to better sales.
            </div>
            <div className="text-xl text-white text-center">
              Reach your audience with professional video.
              <div className="">Tailored to your message and brand</div>
            </div>
            <center className="">
              <motion.button
                animate={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeIn",
                }}
                className="bg-white text-black px-8 py-2 rounded-full font-varela font-semibold tracking-wide shadow-xl shadow-blue-900"
              >
                Free Audit Call
              </motion.button>
            </center>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
