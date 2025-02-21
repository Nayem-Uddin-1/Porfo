import { useState, useEffect } from "react";

const skills = ["Design", "Development", "Fullstack", "UI/UX", "Frontend", "Backend"];

export default function SkillsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-40">
      <div className="text-3xl font-bold transition-opacity duration-1000 opacity-100">
        {skills[index]}
      </div>
    </div>
  );
}
