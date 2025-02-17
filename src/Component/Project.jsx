export default function Projects() {
    const projects = [
        { title: "Portfolio Website", description: "A personal portfolio website showcasing skills and projects.", image: "https://source.unsplash.com/400x300/?technology" },
        { title: "E-commerce App", description: "An online shopping platform with a modern UI.", image: "https://source.unsplash.com/400x300/?shopping" },
        { title: "Blog Platform", description: "A sleek and minimal blog website for writers.", image: "https://source.unsplash.com/400x300/?writing" },
        { title: "Dashboard UI", description: "A beautiful and intuitive dashboard for analytics.", image: "https://source.unsplash.com/400x300/?dashboard" },
        { title: "Chat Application", description: "A real-time messaging app with a sleek design.", image: "https://source.unsplash.com/400x300/?chat" },
        { title: "Fitness Tracker", description: "An app to track workouts and health progress.", image: "https://source.unsplash.com/400x300/?fitness" }
    ];

    return (
        <section className="py-12 px-6  text-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-teal-400">Projects</h2>
                <p className="text-gray-400 mt-2">Here are some of my latest projects that showcase my design and development skills.</p>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-teal-300">{project.title}</h3>
                            <p className="text-gray-400 mt-2">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
