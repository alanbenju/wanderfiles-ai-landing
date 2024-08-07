import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.jpg";
import viaggi from "../assets/images/viaggi.png";
import codeExample from "../assets/images/code-example.png";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen  flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            PDF/JPEG/JPG/PNG to json
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4">
            <h1 className="inline md:hidden">PDF AND JPG TO JSON</h1>
            <h1 className="hidden md:inline">Simplify Your File  </h1>
          </div>
          <h1 className="mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-20 md:px-24 lg:px-24">
            Data Extraction
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Automate and Streamline Your Travel Document Processing with Our Advanced AI-Powered Tool.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <button
              className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              aria-label="See How It Works"
              id="see-how"
            >
              See How It Works
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex flex-col lg:flex-row">
            <div className="flex-1 flex flex-col items-center  justify-center">
              <div className="w-4/5 lg:w-4/5">
                <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                  Easy usage
                </h2>
                <p className="text-secondaryText leading-loose">
                  1 - Create an API Key
                </p>
                <p className="text-secondaryText leading-loose">
                  2 - Call our API with the key and your file
                </p>
                <p className="mb-5 text-secondaryText leading-loose">
                  3 - Receive your array of Jsons with all your file data
                </p>
                <img
                  src={viaggi.src}
                  alt="Flight confirmation image"
                  className="w-full mx-auto z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center mt-8 lg:mt-0">
              <div className="w-4/5 lg:w-4/5">
                <img
                  src={codeExample.src}
                  alt="Code example image"
                  className="w-full mx-auto z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
                />
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
