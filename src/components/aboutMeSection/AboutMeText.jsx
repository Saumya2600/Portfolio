import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I’m Saumya, a passionate Software Developer with over a 2 years of experience. I specialize in building scalable and user-friendly web applications
        using React.js, Node.js, and AWS. With hands-on experience in full-stack development,
         data integration, and cloud technologies, I thrive on solving complex problems and delivering
          impactful solutions.

When I’m not coding, you’ll find me exploring new technologies, contributing to open-source projects, 
or working on personal projects that challenge me to grow. I’m always eager to learn,
 collaborate, and create something meaningful.

Let’s build something amazing together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
