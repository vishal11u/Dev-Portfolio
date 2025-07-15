import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    { name: "auth0", file: "auth0.svg" },
    { name: "blazor", file: "blazor.svg" },
    { name: "cplusplus", file: "cplusplus.webp" },
    { name: "csharp", file: "csharp.svg" },
    { name: "css3", file: "css3.png" },
    { name: "dotnet", file: "dotnet.svg" },
    { name: "git", file: "git.svg" },
    { name: "html5", file: "html5.png" },
    { name: "react", file: "react.svg" },
    { name: "tailwindcss", file: "tailwindcss.svg" },
    { name: "vitejs", file: "vitejs.svg" },
    { name: "wordpress", file: "wordpress.png" },
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.file}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills
          .slice() // avoid mutating original
          .reverse()
          .map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill.file}`} />
          ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
