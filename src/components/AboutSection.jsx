import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () =>{
    return(
    <section id="about" className="py-24 px-4 relative"> 
        <div className="conatiner mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Om <span className="text-primary">Mig</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Fullstack .NET Developer | Student med ett intresse för utveckling</h3>

                    <p className="text-muted-foreground">
                        Jag är en blivande Fullstack .NET-utvecklare med en bakgrund inom webbutveckling.
                        Just nu fördjupar jag mina kunskaper i C#, .NET, SQL, REST API:er och moderna webbtekniker.
                    </p>

                    <p className="text-muted-foreground">
                        Med erfarenhet av både frontend och backend brinner jag för att utveckla smarta,
                        användarvänliga lösningar. Jag är nyfiken, målmedveten och drivs av att ständigt
                        lära mig nytt – och ser fram emot att omsätta mina färdigheter
                        i praktiska projekt och framtida utmaningar.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Kontakt                           
                        </a>


                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-text-semibold text-lg">Webbutveckling</h4>
                                <p className="text-muted-foreground">
                                    Jag har arbetat med både frontend och backend i flera projekt, främst med React, TypeScript och .NET.
                                    Jag strävar efter att skriva ren och återanvändbar kod,
                                    och har erfarenhet av att bygga responsiva gränssnitt med Tailwind CSS.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-text-semibold text-lg">Samarbete & Kommunikation</h4>
                                <p className="text-muted-foreground">
                                    Jag trivs i team och är van vid att arbeta agilt med verktyg som Git, GitHub och Trello. 
                                    Jag värdesätter tydlig kommunikation och tycker om att diskutera lösningar
                                    tillsammans för att uppnå bästa möjliga resultat.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-text-semibold text-lg">Praktisk Erfarenhet</h4>
                                <p className="text-muted-foreground">
                                    Jag har arbetat med flera fullstack-projekt, bland annat ett bokningssystem och en bloggplattform. 
                                    Jag har god vana av att arbeta med databaser som SQL Server och att utveckla API:er med ASP.NET Core,
                                    med fokus på struktur, prestanda och säkerhet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};