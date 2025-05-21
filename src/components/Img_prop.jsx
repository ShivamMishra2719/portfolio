const Img_prop = ({ img, title }) => {
  const upperTitle = title.toUpperCase();

  const classMap = {
    HTML: "border-orange-500 shadow-orange-500",
    CSS: "border-blue-500 shadow-blue-500",
    JAVASCRIPT: "border-yellow-400 shadow-yellow-400",
    REACTJS: "border-cyan-400 shadow-cyan-400",
    REDUX: "border-purple-500 shadow-purple-500",
    TAILWIND: "border-sky-400 shadow-sky-400",
    SCSS: "border-pink-400 shadow-pink-400",
    NEXTJS: "border-white shadow-white",
    NODEJS: "border-green-600 shadow-green-600",
    MONGODB: "border-green-400 shadow-green-400",
    SQL: "border-orange-400 shadow-orange-400",
    GITHUB: "border-gray-400 shadow-gray-400",
    PYTHON: "border-yellow-300 shadow-yellow-300",
    JAVA: "border-red-500 shadow-red-500",
    AWS: "border-orange-400 shadow-orange-400",
  };

  const cardClasses = classMap[upperTitle] || "border-slate-500 shadow-slate-500";

  return (
    <div
      className={`w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px]
      rounded-xl bg-[#0d1021] text-white flex flex-col justify-center items-center
      shadow-lg hover:scale-105 transition-transform duration-300 ${cardClasses}`}
    >
      <img src={img} alt={title} className="w-[40px] sm:w-[50px] md:w-[60px]" />
      <p className="mt-2 text-sm sm:text-base text-gray-300">{upperTitle}</p>
    </div>
  );
};

export default Img_prop;
