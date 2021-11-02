import { motion } from "framer-motion";
import { useState } from "react";
import { fedeInUp, route, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [details, setDetails] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((projects) =>
      projects.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      variants={route}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-y-scroll px-5 py-2"
      style={{ height: "65vh" }}
    >
      <ProjectNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        className="grid relative grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            variants={fedeInUp}
            key={project.name}
          >
            <ProjectCard
              project={project}
              details={details}
              setDetails={setDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
