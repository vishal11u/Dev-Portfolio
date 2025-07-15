import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    { name: "html5", file: "html5.svg" },
    { name: "tailwindcss", file: "tailwindcss.svg" },
    { name: "JavaScript-pink", file: "JavaScript-pink.png" },
    { name: "react", file: "react.svg" },
    { name: "typescript-pink", file: "typescript-pink.png" },
    { name: "vitejs", file: "vitejs.svg" },
    { name: "nextjs", file: "nextjs.png" },
    { name: "redux", file: "redux.png" },
    { name: "jest", file: "jest.png" },

    { name: "vercel", file: "vercel.png" },
    { name: "node", file: "node.png" },
    { name: "supabase-logo", file: "supabase-logo.png" },
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.file}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={1}>
        {skills
          .slice()
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
