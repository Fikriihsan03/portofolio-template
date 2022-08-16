import CardList from "./CardList";
import data from "../data/projectsData.json";

const Projects = ({ gradientStart, gradientEnd }) => {
  return (
    <>
      {" "}
      <div className="md:mx-[100px] mx-[20px] ">
        <h1 className="text-5xl font-bold mb-[100px]">Projects</h1>
        <div className="flex flex-col justify-center items-center">
          <CardList
            data={data}
            gradientStart={gradientStart}
            gradientEnd={gradientEnd}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
