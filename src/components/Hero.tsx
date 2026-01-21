import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, LayoutTemplate, Server, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-background">
      {/* Professional Abstract Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-foreground text-sm font-medium mb-6 border border-border">
                Hi, I'm Mayank Rawat
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Full Stack <br />
              <span className="text-primary">Engineering.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              Architecting scalable web solutions with Next.js, NestJS, and Docker. 
              Turning complex requirements into high-performance applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="rounded-full min-w-[160px]" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="rounded-full min-w-[160px]" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-6 mt-12 text-muted-foreground"
            >
              <a href="https://github.com/rawatshahab" className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mayankrawat2402/" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/home" className="hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
            </motion.div>
          </div>

          {/* Abstract Tech Animation */}
          <div className="lg:w-1/2 flex justify-center relative">
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-[400px] h-[400px] flex items-center justify-center"
             >
                {/* Orbital Rings - Added will-change-transform for performance */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full border border-primary/20 rounded-full will-change-transform"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-3/4 h-3/4 border border-dashed border-primary/30 rounded-full will-change-transform"
                />

                {/* Floating Icons - Added will-change-transform */}
                <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 p-3 bg-card shadow-lg rounded-xl border border-border will-change-transform"
                >
                    <LayoutTemplate className="text-blue-500" size={28} />
                </motion.div>

                <motion.div 
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-10 right-10 p-3 bg-card shadow-lg rounded-xl border border-border will-change-transform"
                >
                    <Server className="text-green-500" size={28} />
                </motion.div>

                <motion.div 
                    animate={{ x: [-5, 5, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute left-4 p-3 bg-card shadow-lg rounded-xl border border-border will-change-transform"
                >
                    <Smartphone className="text-purple-500" size={28} />
                </motion.div>

                {/* Central Element */}
                <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-2xl rotate-45 shadow-2xl flex items-center justify-center">
                    <div className="w-24 h-24 bg-background/90 backdrop-blur rounded-xl flex items-center justify-center">
                         <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
                    </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;