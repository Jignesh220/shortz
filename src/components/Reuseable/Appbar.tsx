import React from "react";
import { motion } from "framer-motion";

export default function Appbar() {
  const [inView, setinView] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -40,backgroundColor: "rgb(51 65 85)" }}
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
              backgroundColor: "rgb(226,232,240)",
              color: "#000",
            }
          : {}
      }
    >
      <motion.div
        className="min-w-full px-5 py-2 group md:block min-[0px]:hidden"
        whileHover={{
          backgroundColor: "rgb(51 65 85)",
        }}
        animate={{ backgroundColor: "rgb(226,232,240)", color: "#000" }}
        transition={{
          duration: 0.4,
          ease: "easeIn",
        }}
      >
        <div className="px-4 flex flex-row place-content-between">
          <div className="text-2xl font-bold group-hover:text-white">
            Shortz
          </div>
          <div className="flex flex-row-reverse">
            <motion.button
              className="border-teal-700 border font-bold lg:px-5 lg:py-2 text-black rounded-full group-hover:border-teal-300 group-hover:text-white md:px-3 md:py-1.5"
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
              whileHover={{
                scale: 0.92,
              }}
            >
              Get Started
            </motion.button>
            <motion.a
              href="mailto:contactus@shortz.com"
              className="lg:text-lg md:text-md text-white group-hover:text-black my-auto mx-6 group-hover:bg-teal-200 bg-teal-600 px-3 rounded-lg tracking-wide font-semibold"
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
              whileHover={{
                scale: 1.02,
              }}
            >
              contactus@shortz.com
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              className="lg:text-lg md:text-md text-white group-hover:text-black my-auto group-hover:bg-teal-200 bg-teal-600 px-3 rounded-lg tracking-wide font-semibold"
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
              whileHover={{
                scale: 1.02,
              }}
            >
              +1234567890
            </motion.a>
          </div>
        </div>
      </motion.div>
      <div className="md:hidden min-[0px]:block">
        <div className="min-w-full p-2">
          <div className="px-4 flex flex-row place-content-between">
            <div className="text-xl font-bold group-hover:text-white">
              Shortz
            </div>
            <div className="flex flex-row-reverse">
              <motion.a
                href="#"
                className="border-teal-700 border font-bold px-3 py-1 text-black rounded-full group-hover:border-teal-300 group-hover:text-white"
                animate={{
                  scale: 1,
                }}
                whileFocus={{
                  backgroundColor: "rgb(147 197 253)",
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeIn",
                }}
              >
                Get Started
              </motion.a>
            </div>
          </div>
        </div>
        <div className="min-w-full p-2">
          <div className="px-4 flex flex-row place-content-center">
            <motion.a
              href="mailto:contactus@shortz.com"
              className="text-sm text-white group-hover:text-black my-auto mx-2 group-hover:bg-blue-200 bg-blue-600 px-3 rounded-lg tracking-wide font-semibold"
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
              whileHover={{
                scale: 1.02,
              }}
            >
              contactus@shortz.com
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              className="text-sm text-white group-hover:text-black my-auto mx-2 group-hover:bg-blue-200 bg-blue-600 px-3 rounded-lg tracking-wide font-semibold"
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
              whileHover={{
                scale: 1.02,
              }}
            >
              +1234567890
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
