import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const jobs = [
  {
    role: "SDE 1",
    company: "The Regiment",
    period: "May 2025 - Present",
    description: "Developed full-stack applications leveraging Docker and Nx for scalable architecture. Built robust backend systems with NestJS including custom SMTP server configuration and DNS management, alongside dynamic Next.js frontends.",
    tags: ["NestJS", "Next.js", "Nx", "Docker", "SMTP"]
  },
  {
    role: "Frontend Developer",
    company: "Tems Tech Solutions",
    period: "Feb 2025 - May 2025",
    description: "Developed modern frontend applications using React, Tailwind CSS, and RTK Query. Collaborated with designers and backend developers to deliver responsive and high-performance user interfaces.",
    tags: ["React", "Tailwind CSS", "RTK Query", "TypeScript"]
  },
  {
    role: "B.Tech in Computer Engineering",
    company: "JC Bose University YMCA",
    period: "2021 - 2025",
    description: "Specialized in Data Science. Created multiple projects utilizing WebSockets, message queues, and telemetry monitoring systems during the coursework.",
    tags: ["Data Science", "WebSockets", "System Design", "Telemetry"]
  }
];

const WorkTimeline = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             A timeline of my professional journey and contributions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 -translate-x-1/2" />
          
          {/* Vertical line for mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10" />

          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center justify-between mb-12 md:mb-24 last:mb-0 flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-[3px] border-primary shadow-[0_0_0_4px_rgba(var(--primary),0.1)] z-10 mt-1.5 md:mt-0" />

              {/* Date (Desktop) */}
              <div className={`hidden md:flex w-5/12 justify-center items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
              }`}>
                 <div className="flex items-center gap-2 text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-border/50 shadow-sm">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-sm font-medium">{job.period}</span>
                 </div>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                 <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="p-6 pb-2">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-start justify-between">
                                <h3 className="text-lg font-bold text-foreground">{job.role}</h3>
                                {/* Date (Mobile) */}
                                <div className="md:hidden">
                                    <Badge variant="secondary" className="text-xs">{job.period}</Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                <Briefcase size={14} />
                                <span>{job.company}</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-4">
                        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                            {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {job.tags.map(tag => (
                                <Badge key={tag} variant="outline" className="text-xs font-normal bg-secondary/20">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                 </Card>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;