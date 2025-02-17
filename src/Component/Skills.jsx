const Skills = () => {
    const skills = [
      "HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Git & GitHub"
    ];
  
    return (
      <section className="py-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold  mb-4">Skills</h2>
          <p className="  text-lg mb-8">
            Here are some of the technologies I have experience with:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-xl text-gray-700 font-semibold">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;