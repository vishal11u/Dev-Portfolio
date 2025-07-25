import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />

          <div className="z-10">
            <p className="headtext">Hi, I'm Vishal Shitole</p>
            <p className="subtext">
              Over the last 1.5 years, I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>

            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />

            {/* Frontend Logos */}
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/android-icon.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/firebase.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-50deg", top: "5%", left: "15%" }}
              image="assets/logos/css-logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-55deg", top: "5%", left: "35%" }}
              image="assets/logos/ios.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-60deg", top: "5%", left: "55%" }}
              image="assets/logos/junkin.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-65deg", top: "5%", left: "90%" }}
              image="assets/logos/visualstudiocode.svg"
              containerRef={grid2Container}
            />

            {/* New Frontend Cards */}
            <Card
              style={{ rotate: "15deg", top: "20%", left: "65%" }}
              text="UI/UX"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "80%", left: "10%" }}
              text="Responsive Design"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "-15deg", top: "35%", left: "5%" }}
              text="Performance"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
