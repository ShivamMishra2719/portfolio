/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Menu = forwardRef(({ setNav, theme, handleTheme }, ref) => {
  return (
    <div
      ref={ref}
      className="text-lg tracking-wider absolute top-20 right-5 leading-10 border shadow-xl border-slate-300 text-[#00040f] dark:text-slate-300 mt-5 w-[180px] p-4 rounded-lg bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] max-sm:block z-50"
    >
      <ul className="pl-2 ">
        <li>
          <a href="#about" onClick={() => setNav(false)}>Home</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setNav(false)}>Skills</a>
        </li>
        <li>
          <a href="#education" onClick={() => setNav(false)}>Education</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setNav(false)}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setNav(false)}>Contact</a>
        </li>
        <button
          className="text-xl font-semibold tracking-widest"
          onClick={handleTheme}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </ul>
    </div>
  );
});

export default Menu;
