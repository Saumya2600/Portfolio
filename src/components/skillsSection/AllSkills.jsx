import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { IoLogoPython } from "react-icons/io";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoTableau } from "react-icons/io5";

const skills = [
  {
    skill: "C++",
    icon: CgCPlusPlus,
  },
  {
    skill: "Python",
    icon: IoLogoPython,
  },
  
  {
  skill: "Java",
  icon: FaJava,
},
  
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
 
  {
    skill: "ReactJS",
    icon: FaReact,
  },
 
  {
    skill: "SQL",
    icon: AiOutlineConsoleSql,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Power Bi",
    icon: IoLogoTableau,
  }
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
