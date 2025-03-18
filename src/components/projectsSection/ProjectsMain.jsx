import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Company-Wide Dashboard",
    year: "Jan 2024",
    align: "right",
    image: "../../public/images/website-img-1.jpg", // Default image
    link: "#",
  },
  {
    name: "Mask Watch - AWS Services",
    year: "Dec 2023",
    align: "left",
    image: "../../public/images/website-img-2.webp", // Default image
    link: "#",
  },
  {
    name: "PawPals - Pet Adoption Platform",
    year: "Nov 2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg", // Default image
    link: "#",
  },
  {
    name: "Trivia Titans - Quiz Game",
    year: "Oct 2023",
    align: "left",
    image: "../../public/images/website-img-4.jpg", // Default image
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;