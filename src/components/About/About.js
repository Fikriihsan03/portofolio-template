import styles from "./About.module.css";
const About = ({ gradientEnd, gradientStart }) => {
  return (
    <>
      <section id="about">
        {/* <!-- content here --> */}
        <div
          className={`${styles.Wave} h-full min-h-[700px] bg-gradient-to-r from-[${gradientStart}] to-[${gradientEnd}] flex flex-col justify-start items-center`}
        >
          <h1 className="text-5xl font-bold text-white pt-[30px]">About</h1>
          <div className="flex  flex-col md:flex-row md:w-[70%] mt-[3rem]">
            <div className="md:w-1/2 flex justify-center h-[300px]">
              <img
                src="https://i.pinimg.com/originals/9c/70/54/9c70543426c82c05513dadcd210ce67a.jpg"
                alt="Girl in a jacket"
                width="300"
              />
            </div>
            <div className="md:w-1/2  text-center text-white mt-[2rem] mb-[15rem] mx-[5px]">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi neque, ipsa animi maiores repellendu distinctioaperiam
                earum dolor voluptatum consequatur blanditiis inventore debitis
                fuga numquam voluptate architecto itaque molestiae. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Excepturi neque,
                ipsa animi maiores repellendu distinctioaperiam earum dolor
                voluptatum consequatur blanditiis inventore debitis fuga numquam
                voluptate architecto itaque molestiae.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
