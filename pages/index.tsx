import { motion } from "framer-motion";
import { GetStaticPropsContext } from "next";

import { fedeInUp, route, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";

import { services } from "../data";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={route}
      initial="initial"
      animate="animate"
    >
      <h5 className="my-3 font-medium">............</h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">what i offer</h6>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fedeInUp}
              className="bg-gray-200 rounded-lg md:col-span-1 dark:bg-dark-200"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();

  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};
