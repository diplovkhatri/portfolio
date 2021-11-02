import { motion } from "framer-motion";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { fedeInUp, route } from "../animations";

const resume = () => {
  return (
    <motion.div
      variants={route}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-4 px-6 py-2"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fedeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Educaions</h5>
          <div>
            <h5 className="my-3 text-xl font-bold">Computer Engineering</h5>
            <p className="font-semibold">Accademy</p>
            <p className="my-3">i am ..............</p>
          </div>
        </motion.div>
        <motion.div variants={fedeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experiences</h5>
          <div>
            <h5 className="my-3 text-xl font-bold">Software Engineering</h5>
            <p className="font-semibold">ABC Compant 2021-present</p>
            <p className="my-3">i am ..............</p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Frameworkd</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
