import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fedeInUp, stagger } from "../animations";
import { IProject } from "../type";

const ProjectCard: FunctionComponent<{
  project: IProject;
  details: number | null;
  setDetails: (id: null | number) => void;
}> = ({
  project: {
    category,
    name,
    deployed_url,
    description,
    github_url,
    image_path,
    key_techs,
    id,
  },
  details,
  setDetails,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setDetails(id)}
        height="200"
        width="400"
      />
      <p className="my-2 text-center" onClick={() => setDetails(id)}>
        {name}
      </p>

      {details === id && (
        <div className="grid absolute top-0 left-0 z-10 gap-x-12 p-2 w-full h-auto text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fedeInUp}
              className="border-4 border-gray-400"
            >
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                height="200"
                width="400"
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fedeInUp}
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={fedeInUp}>
            <motion.h2
              variants={fedeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fedeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <motion.span
                  variants={fedeInUp}
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded dark:bg-dark-200"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setDetails(null)}
            className="absolute top-3 right-3 p-1 bg-gray-200 rounded-full focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
