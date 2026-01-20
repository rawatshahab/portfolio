import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useRef } from "react";
import { Layers, Zap, Globe, Cpu } from "lucide-react";

const skills = [
  "Next.js", "NestJS", "React", "TypeScript", 
  "Docker", "Nx Monorepo", "CI/CD", "Node.js", 
  "PostgreSQL", "SMTP Config", "DNS Management", "n8n"
];

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let i = 0;
      setDisplayText(""); // Ensure starts empty
      
      const timer = setInterval(() => {
        if (i < text.length) {
          // Use slice based on index rather than appending to previous state
          // This avoids race conditions and double-renders in React Strict Mode
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50); 
      return () => clearInterval(timer);
    }
  }, [text, isInView]);

  return (
    <span ref={ref}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center"
        >
          {/* Abstract Illustration Column */}
          <div className="w-full md:w-5/12 flex justify-center order-first">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              
              {/* Animated decorative circles */}
              <motion.div 
                 animate={{ scale: [1, 1.1, 1], rotate: 180 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl"
              />
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-background p-6 rounded-2xl shadow-lg border border-border flex flex-col items-center gap-3 w-32 h-32 justify-center"
                  >
                    <Layers className="text-primary w-8 h-8" />
                    <span className="text-xs font-medium text-muted-foreground">Monorepo</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-background p-6 rounded-2xl shadow-lg border border-border flex flex-col items-center gap-3 w-32 h-32 justify-center mt-8"
                  >
                    <Cpu className="text-yellow-500 w-8 h-8" />
                    <span className="text-xs font-medium text-muted-foreground">DevOps</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-background p-6 rounded-2xl shadow-lg border border-border flex flex-col items-center gap-3 w-32 h-32 justify-center -mt-8"
                  >
                    <Globe className="text-blue-500 w-8 h-8" />
                    <span className="text-xs font-medium text-muted-foreground">Full Stack</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-background p-6 rounded-2xl shadow-lg border border-border flex flex-col items-center gap-3 w-32 h-32 justify-center"
                  >
                     <div className="text-2xl font-bold text-foreground">1+</div>
                     <span className="text-xs font-medium text-muted-foreground">Years Exp.</span>
                  </motion.div>
              </div>

            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-7/12 space-y-8">
            <div className="space-y-4">
                <Badge variant="outline" className="w-fit">About Me</Badge>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    <TypewriterText text="Driven by modern web architecture" />
                </h2>
            </div>
            
            <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Hello! I'm <span className="text-foreground font-semibold">Mayank Rawat</span>, a passionate Full Stack Developer with over a year of specialized experience in building scalable web applications.
              </p>
              <p>
                 I excel in navigating the full software development lifecycle, from setting up efficient <span className="text-foreground font-medium">Nx monorepos</span> and orchestrating containers with <span className="text-foreground font-medium">Docker</span>, to developing robust backend services with <span className="text-foreground font-medium">NestJS</span> and dynamic frontends using <span className="text-foreground font-medium">Next.js</span>. I also leverage <span className="text-foreground font-medium">n8n</span> for powerful workflow automation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;