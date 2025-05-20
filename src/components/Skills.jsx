import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
nodejs,
  Java,
  next,
  AWS,
  C,
  mongodb
} from "../constants/Constants";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";
import { IconButton, Tooltip } from "@mui/material";
IconButton

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="skills"
    className="EXPERIENCE px-10 sm:px-12 md:pr-12 lg:px-20 mb-10 font-['Poppins']">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl m-7rem px-14">
          SKILLS
        </h1>
        <div
         className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9  mt-10  justify-items-center"
          data-aos="zoom-out-up"
        >
         
          <Image img={HTML}></Image>
          

         
          <Image img={CSS}></Image>
        
          <Image img={Javascript}></Image>
        
          <Image img={react}></Image>
        
          
          <Image img={TailwindCSS}></Image>
       
         
          <Image img={mongodb}></Image>
         
         
          <Image img={Java}></Image>
         
          <Image img={nodejs}></Image>
  
          <Image img={Python}></Image>
          
         
          <Image img={next}></Image>
        
       
         
          <Image img={AWS}></Image>
       
        
          <Image img={Github}></Image>
       
         
        </div>
      </section>
    </>
  );
};
export default Skills;
