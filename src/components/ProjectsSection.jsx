import { ArrowRight, ExternalLink, Github, Linkedin } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Buildboard WebApp",
        description: "En teamplanerings web app byggt i React och C# .NET",
        image: "/Projects/image.png",
        tags: ["React", "C# .NET"],
    },
    
    {
        id: 2,
        title: "BankApplikation",
        description: "En simpel men fungerande bankapplikation byggt i C# .NET",
        image: "/Projects/bank.png",
        tags: ["C# .NET"],
    },
];

export const ProjectSection = () =>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="conatiner  mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Mina <span className="text-primary"> Projekt </span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Här är några projekt som jag har arbetat med
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                {projects.map((projects, key) =>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs"
                    > 


                        <div className="h-48 overflow-hidden"> 
                            <img 
                            src={projects.image}
                            alt={projects.title}
                            className="w-full h-full object-cover transition-transform duration-500 gruop-hover:scale-110" />
                        </div>

                        <div className="p-6">
                             <div className="flex flex-wrap gap-2 mb-4">
                                {projects.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                             </div>

                        <h3 className="text-xl font-semibold mb-1"> {projects.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{projects.description}</p>

                            <div className="flex justify-between items-center">
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank" 
                    href="https://github.com/alfrokot100"
                    >
                    Kolla gärna in mitt Github konto! <ArrowRight size={16} />
                </a>

            </div>
        </div>
    </section>;
}