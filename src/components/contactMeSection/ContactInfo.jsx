import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="shahsaumya261@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+1 902 993 0448" Image={FiPhone} />
      <SingleInfo text="Halifax, Canada" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
