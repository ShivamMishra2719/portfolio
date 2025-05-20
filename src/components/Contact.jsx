/* eslint-disable react/no-unescaped-entities */
import {
    SiGithub,
    SiLinkedin,
    SiGmail,
  } from "react-icons/si";
  import { FaXTwitter } from "react-icons/fa6";
  
  import shivam from "../assets/shivam.jpg";
  
  
  
  const Contact = () => {
    return (
      <>
        <section
          id="contact"
          className="EXPERIENCE dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins']  max-sm:p-2 "
        >
          <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2">
            <div className="ABOUT p-7">
              <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
               Shivam Mishra
              </h2>
              <p className="text-gray-600 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
               
              </p>
              <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
                <a
                  href="https://github.com/ShivamMishra2719"
                  className=" hover:text-slate-500  dark:hover:text-sky-300"
                >
                  <SiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-mishra-622257274/"
                  className=" hover:text-slate-500  dark:hover:text-sky-300"
                >
                  <SiLinkedin />
                </a>
               
                <a
                  href="https://twitter.com/@Shivammish28782"
                  className=" hover:text-slate-500  dark:hover:text-sky-300"
                >
                  <FaXTwitter />

                </a>
                <a
                  href="mishrashivamrm@gmail.com"
                  className=" hover:text-slate-500  dark:hover:text-sky-300"
                >
                  <SiGmail />
                </a>
              </div>
              <div className="flex gap-5 max-sm:justify-center">
              <a href="/Shivam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300  from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded ">
                 Resume
                </button>
                </a>
                <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600  font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded ">
                  <a
                    href="https://github.com/ShivamMishra2719"
                    className="flex gap-2 items-center justify-center"
                  >
                    <SiGithub />
                    Star
                  </a>
                </button>
              </div>
            </div>
  
            <div className="IMG p-0  max-sm:grid max-sm:place-content-center">
              <img
                src={shivam}
                alt="shivam mishra"
                className="h-[200px]  max-sm:h-[150px] border-[#00040fab] dark:border-slate-300 border-4 rounded-full mt-"
              />
            </div>
          </div>
  
          <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
            made with 💙 by Shivam Mishra
          </p>
        </section>
      </>
    );
  };
  export default Contact;
  