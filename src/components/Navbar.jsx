import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import { useRef } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [theme, setTheme] = useState("light");

  const menuRef = useRef(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <section className="NAVBAR p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
        <div className="NAVBAR flex  justify-between capitalize">
          <div className="LOGO">
            <a
              href="#"
              className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
            >
              {"<Shivam/>"}
            </a>
          </div>
          <div className="NAVLINKS ml-auto flex justify-between flex-wrap hidden lg:flex text-[16px] sm:text-[18px] md:text-[20px] text-[#00040f] dark:text-[#e1e1e1] gap-3 sm:gap-6 md:gap-8">
  <a href="#about" className=" hover:text-cyan-500">Home</a>
  <a href="#projects" className="hover:text-cyan-500 ">Projects</a>
  <a href="#education" className="hover:text-cyan-500 ">Education</a>
  <a href="#skills" className="hover:text-cyan-500">Skills</a>
  <a href="#contact" className="hover:text-cyan-500 ">Contact</a>
  <button onClick={handleTheme}>
    {theme === "dark" ? (
      <HiMoon className="-translate-y-1 text-2xl" />
    ) : (
      <HiSun className="-translate-y-1 text-2xl" />
    )}
  </button>
</div>

<button onClick={() => setNav(!nav)}>
  <CgMenuRightAlt className="block lg:hidden text-[32px] text-[#00040f] dark:text-[#e1e1e1]" />
</button>

        </div>
        {nav && <Menu ref={menuRef} setNav={setNav} theme={theme} handleTheme={handleTheme} />}
      </section>
    </>
  );
};
export default Navbar;
