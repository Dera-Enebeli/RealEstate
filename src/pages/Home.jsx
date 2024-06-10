// import { GiRobotGolem } from "react-icons/gi";
// import { SiThealgorithms } from "react-icons/si";
// import { SiManageiq } from "react-icons/si";
// import { AiFillControl } from "react-icons/ai";
// import { GrStar } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiMapPin } from "react-icons/bi";
// import { HiOutlinePhone } from "react-icons/hi";
// import { HiOutlineDeviceMobile } from "react-icons/hi";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className=" flex flex-col bg-mainBlue p-5 md:px-[5rem] md:flex-row md:justify-between lg:px-[10rem]">
        <div className="flex flex-col justify-center text-center gap-2">

          <div className="flex items-center justify-center text-center gap-1 md:justify-start">
            <HiOutlineMail size={17} className="text-orange-200 shrink-0" />
            <p className="text-sm font-bold text-white">support@HalveGain.com</p>
          </div>

          <div className="flex items-center justify-center text-center gap-1 md:justify-start">
            <BiMapPin size={17} className="text-orange-200 shrink-0 " />
            <p className="text-sm font-bold text-white">1101 Oakview DR Greenville NC 27858-5228 USA</p>
          </div>

        </div>

        <div className="flex justify-center text-center items-center md:flex-end gap-4 pt-2">
            <div>{
                    <BiLogoFacebook
                        size={20}
                        className="text-orange-200"
                    />
                }</div>
            <div>{
                    <BiLogoInstagram
                        size={20}
                        className="text-orange-200"
                    />
                }</div>
            <div>{
                    <BiLogoTwitter
                        size={20}
                        className="text-orange-200"
                    />
                }</div>
        </div>
      </section>


    </>
  );
}
