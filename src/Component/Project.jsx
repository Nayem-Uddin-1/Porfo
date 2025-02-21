export default function Projects() {
    const projects = [
        { title: "Portfolio Website", description: "A personal portfolio website showcasing skills and projects.", image: "https://img.freepik.com/free-vector/creative-process-landing-page_23-2148159975.jpg?t=st=1740072799~exp=1740076399~hmac=47df6b5f25dff7723930e887f663c9c4c283eb1b44f815e6a08ae916e74556c9&w=740" },
        { title: "E-commerce App", description: "An online shopping platform with a modern UI.", image: "https://img.freepik.com/free-vector/digital-marketing-team-constructing-landing-home-page-landing-page-flat-style_74855-19220.jpg?t=st=1740072929~exp=1740076529~hmac=649d435f2d3d25f9586f6f9f7cdfca8cb06dd794405ff3142fa2bb9eae09198c&w=996" },
        { title: "Blog Platform", description: "A sleek and minimal blog website for writers.", image: "https://img.freepik.com/free-vector/hand-drawn-creative-process-landing-page_52683-8736.jpg?t=st=1740072936~exp=1740076536~hmac=5309a960992aa9dbd5809cb967ee1b4afe40fc0997596d7875b88039a14ed8cc&w=740" },
        { title: "Dashboard UI", description: "A beautiful and intuitive dashboard for analytics.", image: "https://img.freepik.com/free-vector/creative-process-landing-page_23-2148155552.jpg?t=st=1740073020~exp=1740076620~hmac=2676c58e151498c6c4f43629e2f52e4fadd39e8b94b42145ddbe8fe09c008826&w=740" },
        { title: "Chat Application", description: "A real-time messaging app with a sleek design.", image: "https://img.freepik.com/premium-vector/web-development-flat-landing-page-creative-team-designers-developers-work-together-illustration-full-stack-development-software-engineering-web-page-composition-with-people-characters_9209-3545.jpg?w=740" },
        { title: "Fitness Tracker", description: "An app to track workouts and health progress.", image: "https://img.freepik.com/free-vector/creative-process-landing-page_23-2148163466.jpg?t=st=1740073015~exp=1740076615~hmac=a716368c13bd5de3a90b9abe8097ab4e282b34f874ed49ac59ef1743693172e0&w=740" }
    ];

    return (
        <section className="py-12  px-6   text-white">
          
          <div className="project max-w-7xl mx-auto py-20">
              
          <div className="mx-auto text-center">
                <h2 className="text-3xl font-bold text-teal-400">Projects</h2>
                <p className="text-gray-400 mt-2">Here are some of my latest projects that showcase my design and development skills.</p>
            </div>

            
            <div className="grid relative  md:grid-cols-3 sm:grid-cols-2 gap-6 overflow-hidden mt-10 max-w-7xl mx-auto ">
                {projects.map((project, index) => (
                    <div key={index} className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl  group ">

                        <div className="w-full  h-[250px]">  
                              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                       


                        <div className="p-4 bg-secondary h-[120px]">
                            <h3 className="text-xl font-semibold text-teal-300">{project.title}</h3>
                            <p className="text-gray-400 mt-2">{project.description}</p>
                        </div>


                    </div>
                ))}
            </div>

          </div>

        </section>
    );
}
