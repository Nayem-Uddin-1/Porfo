
import { DiJavascript } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { ImGithub } from "react-icons/im";

const Skills = () => {

  // const skills = [
  //   "HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Git & GitHub"
  // ];



  const icons = [
    { icon: <DiJavascript />, name: "Html" },
    { icon: <SiCss3 />, name: "Css" },
    { icon: <IoLogoJavascript />, name: "javaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <IoLogoReact />, name: "React" },
    { icon: <ImGithub />, name: "GitHub" },
  ];

  return (
    <section className="py-16 text-center text-white">
      <div className="max-w-7xl bg-secondary pt-20 mx-auto px-6">
        <h2 className="text-4xl font-bold  mb-4">Skills</h2>
        <p className="  text-lg mb-8">
          Here are some of the technologies I have experience with:
        </p>
        <div className="grid  grid-cols-2 sm:grid-cols-2 pb-20 pt-5    gap-4">
          {/* {skills.map((skill, index) => (
            <div key={index} className=" bg-green-500 shadow-md p-4 h-[150px] text-white font-semibold">
              <h2 className="text-[45px]"> {skill}</h2>

            </div>
          ))} */}
 
            {icons.map((item, index) => (
              <div className="border p-5 md:text-[80px] sm:text-[50px] text-green-500 flex gap-10 items-center " key={index}>
                <div className="icon cursor-pointer">
              
                {item.icon}


                </div>

                
                <p className="text-white skills-logo-text text-[50px] sm:text-[35px]">{item.name}</p>
               
                
                </div>
            ))}
           


        </div>
      </div>
    </section>
  );
};

export default Skills;