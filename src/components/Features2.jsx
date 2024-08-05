import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
          <span className="block-subtitle">Tailored to Meet Your Unique Needs</span>

            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
            Custom Integration Options
            </h2>
            <p className="mb-16 text-secondaryText leading-loose">
            Provide example files and specify the keys you need. Work directly with us to create custom extraction models and receive personalized support and integration assistance.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
            Cost-Effective and Low Pricing
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            Affordable Solutions for All Users.
            </p>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Pay only 2 cents per processed image</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Opt for our $5 per month subscription for regular users</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Custom pricing available for tailored solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
