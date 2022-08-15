const Intro = ({ gradientStart, gradientEnd }) => {
  // let name=c
  return (
    <div className="min-h-screen mx-[100px] flex justify-center items-center md:items-start flex-col">
      <h1 className="text-5xl font-bold">
        Hi, My Name is
        <span
          className={`ml-[8px] text-transparent bg-clip-text bg-gradient-to-r from-[${gradientStart}] to-[${gradientEnd}]`}
        >
          Muhammad Fikri Ihsan
        </span>
      </h1>
      <h2 className="text-3xl font-bold my-[25px]">
        I'm a Javascript Developer
      </h2>
      <div
        className={`rounded-xl w-[150px] h-[50px] my-[50px] bg-gradient-to-r p-[4px] from-[${gradientStart}]  to-[${gradientEnd}]`}
      >
        <div className="flex flex-col justify-center items-center h-full bg-white text-white rounded-lg ">
          <a
            href="#about"
            className={`text-lg text-transparent bg-clip-text bg-gradient-to-r from-[${gradientStart}] to-[${gradientEnd}] font-semibold`}
          >
            About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
