import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mina <span className="text-primary"> Kontaktuppgifter</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Här kan du nå mig ifall du vill komma i kontakt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Uppgifter
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    alfred.ochieng@chasacademy.se
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Stad</h4>
                  <a
                    
                    className="text-muted-foreground  transition-colors"
                  >
                    Stockholm, Sverige
                  </a>
                </div>
              </div>

               <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/alfred-osewe-b414b12a8/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                  >
                    Alfred Osewe
                  </a>
                </div>

              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};