import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () =>{
    const[isDarkMode, setIsDarkMode] = useState(false);

    //Sparar så att sidan är kvar i light/dark mode när didan reloadas
    useEffect(() =>{
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark"){
            document.documentElement.classList.add("dark");
            setIsDarkMode(true)

        }else{
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    //Fix så att det blir dark/light mode vid tryck på ikon
    const toggleTheme = () =>{
        if(isDarkMode)
            {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
                setIsDarkMode(false);
            }else{
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
                setIsDarkMode(true);
            }
    };


    return <button onClick={toggleTheme} className={cn(
        "fixed maxed-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
    )}>
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" />
         : <Moon className="h-6 w-6 text-blue-900" />}
         </button>

}