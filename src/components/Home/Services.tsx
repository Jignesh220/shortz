import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MessageSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M7.92563 6.39211C5.62654 6.93141 3.8314 8.72655 3.2921 11.0256C2.90263 12.686 2.90263 14.414 3.2921 16.0744C3.8314 18.3735 5.62655 20.1686 7.92564 20.7079C9.58601 21.0974 11.314 21.0974 12.9744 20.7079C15.2734 20.1686 17.0686 18.3735 17.6079 16.0744M7.92563 6.39211C9.58601 6.00264 11.314 6.00264 12.9744 6.39211C15.2734 6.93141 17.0686 8.72656 17.6079 11.0256C17.9974 12.686 17.9974 14.414 17.6079 16.0744M7.92563 6.39211C7.52772 6.48545 7.14491 6.61641 6.78108 6.78108C7.56789 5.04278 9.12447 3.73806 11.0256 3.2921C12.686 2.90263 14.414 2.90263 16.0744 3.2921C18.3735 3.8314 20.1686 5.62655 20.7079 7.92563C21.0974 9.58601 21.0974 11.314 20.7079 12.9744C20.2619 14.8755 18.9572 16.4321 17.2189 17.2189C17.3836 16.8551 17.5145 16.4723 17.6079 16.0744"
          stroke="#0095FF"
          strokeWidth="1.5"
        ></path>{" "}
        <path
          d="M7.92563 6.39208C5.62654 6.93137 3.8314 8.72652 3.2921 11.0256C2.90263 12.686 2.90263 14.414 3.2921 16.0743C3.8314 18.3734 5.62655 20.1686 7.92564 20.7079C9.58601 21.0973 11.314 21.0973 12.9744 20.7079C15.2734 20.1686 17.0686 18.3734 17.6079 16.0743M7.92563 6.39208C9.58601 6.00261 11.314 6.00261 12.9744 6.39208C15.2734 6.93137 17.0686 8.72652 17.6079 11.0256C17.9974 12.686 17.9974 14.414 17.6079 16.0743M7.92563 6.39208C7.52772 6.48542 7.14491 6.61637 6.78108 6.78105M17.6079 16.0743C17.5145 16.4722 17.3836 16.8551 17.2189 17.2189"
          stroke="#363853"
          strokeWidth="1.5"
        ></path>{" "}
        <path
          d="M7.5 12L9.3906 13.2604C10.0624 13.7083 10.9376 13.7083 11.6094 13.2604L13.5 12"
          stroke="#0095FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

const VideoSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
          stroke="#363853"
          stroke-width="1.5"
        ></path>{" "}
        <path
          d="M14.1618 10.8707C14.9461 11.3726 14.9461 12.6274 14.1618 13.1293L11.5147 14.8233C10.7304 15.3253 9.75 14.6979 9.75 13.694L9.75 10.306C9.75 9.30214 10.7304 8.67473 11.5147 9.17665L14.1618 10.8707Z"
          stroke="#0095FF"
          stroke-width="1.5"
        ></path>{" "}
      </g>
    </svg>
  );
};

const CameraSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M16.8603 15.3736C16.9115 15.3906 16.9614 15.4111 17.0097 15.4351L18.6936 16.2714C19.9829 16.9117 21.5 15.9804 21.5 14.5486L21.5 9.81018C21.5 8.29734 19.8246 7.37503 18.533 8.17684L17.0474 9.09913C16.9742 9.14457 16.9064 9.19812 16.8453 9.25876"
          stroke="#0095FF"
          stroke-width="1.5"
        ></path>{" "}
        <path
          d="M16.6633 15.3084C17.1102 13.3366 17.1526 11.2977 16.7904 9.31325M2.8825 15.4419L2.94414 15.7158C3.31747 17.375 4.60449 18.6812 6.26653 19.0876C8.53218 19.6417 10.9252 19.6353 13.1909 19.0813C14.832 18.68 16.1361 17.4066 16.549 15.7787L16.574 15.6801C17.1868 13.2644 17.1868 10.7356 16.574 8.31991L16.549 8.22135C16.1361 6.59343 14.832 5.32005 13.1909 4.91871C10.9252 4.36467 8.53218 4.35834 6.26653 4.91238C4.60448 5.31882 3.31747 6.62497 2.94414 8.28418L2.8825 8.55815C2.3725 10.8248 2.3725 13.1752 2.8825 15.4419Z"
          stroke="#363853"
          stroke-width="1.5"
        ></path>{" "}
      </g>
    </svg>
  );
};

export default function Services() {
  const [inView, setinView] = React.useState(false);
  const [card1, setcard1] = React.useState(false);
  const [card2, setcard2] = React.useState(false);
  const [card3, setcard3] = React.useState(false);

  const [inView2, setinView2] = React.useState(false);
  return (
    <div className="min-h-screen center-v-h-flex min-w-full min-[0px]:mt-60 md:mt-0">
      <div className="grid grid-flow-row gap-8">
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
                  transition: { duration: 0.5, ease: "easeIn" },
                }
              : {}
          }
          className="text-lg text-center font-semibold"
        >
          Our Services
        </motion.div>
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
          className="text-5xl font-bold text-center"
        >
          How we do it?
        </motion.div>
        <div className="grid md:grid-cols-3 min-[0px]:grid-cols-1 gap-y-10 gap-x-20 min-w-full mt-8">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            onViewportEnter={() => {
              setcard1(true);
            }}
            onViewportLeave={() => {
              setcard1(false);
            }}
            animate={
              card1
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeIn" },
                  }
                : {}
            }
            className="bg-slate-200 rounded-2xl shadow-xl shadow-slate-400 py-10 px-8"
            style={{
              maxWidth: "20rem",
              minHeight: "24rem",
            }}
          >
            <div className="grid grid-flow-row gap-3">
              <MessageSvg />
              <div className="text-2xl font-bold font-varela">
                Content Creation
              </div>
              <div className="text-lg font-normal font-varela">
                We will come to your location and film the video content. We
                work with talent and crew to ensure that everything is captured
                correctly.
                <div className="mt-3">
                  <Link
                    href="#"
                    className="text-blue-800 font-semibold tracking-wide "
                  >
                    Read more...
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            onViewportEnter={() => {
              setcard2(true);
            }}
            onViewportLeave={() => {
              setcard2(false);
            }}
            animate={
              card2
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: "easeIn" },
                  }
                : {}
            }
            className="bg-slate-200 rounded-2xl shadow-xl shadow-slate-400 py-10 px-8"
            style={{
              maxWidth: "20rem",
              minHeight: "24rem",
            }}
          >
            <div className="grid grid-flow-row gap-3">
              <CameraSvg />
              <div className="text-2xl font-bold font-varela">
                Consultancy Phase
              </div>
              <div className="text-lg font-normal font-varela">
                We will meet you to discuss your goals, target audience, and
                messeging.This helps us understand what type of video content
                will be most effective.
                <div className="mt-3">
                  <Link
                    href="#"
                    className="text-blue-800 font-semibold tracking-wide "
                  >
                    Read more...
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            onViewportEnter={() => {
              setcard3(true);
            }}
            onViewportLeave={() => {
              setcard3(false);
            }}
            animate={
              card3
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, ease: "easeIn" },
                  }
                : {}
            }
            className="bg-slate-200 rounded-2xl shadow-xl shadow-slate-400 py-10 px-8"
            style={{
              maxWidth: "20rem",
              minHeight: "24rem",
            }}
          >
            <div className="grid grid-flow-row gap-3">
              <VideoSvg />
              <div className="text-2xl font-bold font-varela">
                Content Managing
              </div>
              <div className="text-lg font-normal font-varela">
                Sit back and relax, We take care of everything: wewill schedule
                and publish the videos and monitor engngement and analytics. Our
                aim is to help you ...
                <div className="mt-3">
                  <Link
                    href="#"
                    className="text-blue-800 font-semibold tracking-wide "
                  >
                    Read more...
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
