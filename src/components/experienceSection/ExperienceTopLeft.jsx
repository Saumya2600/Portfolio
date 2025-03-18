import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2021
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2+" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="5+" text="Projects" />
      </div>
      <p className="text-center">
        With 2+ years of experience building scalable and user-friendly web
        applications using React.js, Node.js, and AWS.
      </p>
      <ExperienceInfo number="5+" text="Technologies" />
    </div>
  );
};

export default ExperienceTopLeft;