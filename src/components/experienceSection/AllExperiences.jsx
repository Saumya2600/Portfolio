import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Developer",
    company: "Graphite Innovation & Technology",
    date: "Jan 2024 - March 2025",
    responsibilities: [
      "Developed a company-wide dashboard using React.js and Express.js, hosted on AWS Cloud.",
      "Improved real-time data visualization and decision-making for stakeholders.",
      "Collaborated with cross-functional teams to deliver scalable solutions.",
      "Optimized backend APIs and ensured data accuracy using Python scripts.",
    ],
  },
  {
    job: "Associate Software Engineer",
    company: "Accenture",
    date: "Nov 2021 - Sep 2022",
    responsibilities: [
      "Worked on Java-based projects, adhering to agile methodologies.",
      "Collaborated with cross-functional teams to deliver high-quality solutions.",
      "Gained experience in CI/CD pipelines and version control systems like Git.",
      "Provided technical support and troubleshooting for client applications.",
    ],
  },
  {
    job: "Intern",
    company: "Suven Consultants & Technology",
    date: "Sep 2020 - Nov 2020",
    responsibilities: [
      "Designed and built chatbots using Dialogflow.",
      "Integrated chatbots with Facebook Messenger for enhanced user interactions.",
      "Automated processes to improve user engagement and efficiency.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;