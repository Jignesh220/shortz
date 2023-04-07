import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  const [inView, setinView] = React.useState(false);
  return (
    <div>
      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onViewportEnter={() => {
          setinView(true);
        }}
        onViewportLeave={()=>{
          setinView(false)
      }}
        exit={{ opacity: 0 }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeIn",
                  rotate: 180,
                  scale: 1,
                },
              }
            : {}
        }
      >
        <motion.div className="center-v-h lg:min-w-fit min-[0px]:min-w-full">
          <div className="container mi flex flex-col items-center px-4 py-12 mx-auto text-center">
            <div className="lg:text-md min-[0px]:text-sm font-varela px-6 py-2 rounded-full border border-teal-500 mb-10">
              <span className="mr-2">🚀</span> Looking for grow your brand?
            </div>
            <h1 className="lg:text-5xl md:text-3xl min-[0px]:text-2xl font-bold font-varela text-gray-800 tracking-wide">
              We specialize in creating explosive 💥{" "}
              <span className="text-green-500">brand growth</span> on TikTok,
              Instagram Reels, and YouTube Shorts.
            </h1>
            <p className="block lg:text-3xl md:text-xl min-[0px]:text-lg max-w-4xl my-8 text-gray-500">
              Don't miss out the benifts of short-form content - let us help you
              reach a wider audiunce and achive your goals.
            </p>

            <motion.button
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="mt-12 shadow-lg hover:shadow-md shadow-slate-400 lg:text-2xl md:text-lg min-[0px]:text-lg px-8 py-3 rounded-full bg-gradient-to-r from-cyan-700 via-green-600 to-green-700 text-white font-bold font-varela"
            >
              Free Audit Call
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
