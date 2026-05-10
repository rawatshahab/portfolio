import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "SaaS API Gateway",
    description:
      "Self-hosted API gateway platform deployable via Docker on any VPS. Features a WebSocket control plane with config hot-reload, multi-tenant PostgreSQL provisioning, rate limiting, JWT auth, Prometheus metrics, request log batching, and a Next.js admin dashboard.",
    image:
      "https://res.cloudinary.com/dic7czrqe/image/upload/v1778434501/Screenshot_2026-05-10_at_11.04.54_PM_xfkmv1.png",
    tags: [
      "Docker",
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "WebSockets",
      "Prometheus",
    ],
    links: {
      repo: "https://github.com/rawatshahab/api-gateway",
    },
  },
  {
    title: "SquadUp",
    description:
      "Real-time collaboration platform for students with private coding rooms and whiteboards. Built on Nx with NestJS & React, featuring a multi-language compiler and Dockerized deployment.",
    image:
      "https://res.cloudinary.com/didovzx3t/image/upload/v1768926525/Screenshot_2026-01-20_at_21.58.35_grttfr.png",
    tags: ["Nx", "NestJS", "React", "Docker", "WebSockets"],
    links: {
      repo: "https://github.com/rawatshahab/squadup.in",
    },
  },
  {
    title: "Mailtr",
    description:
      "Mailer SaaS on an Nx monorepo with NestJS and React. Create unlimited emails for custom domains with a full inbox experience. Features automated CI/CD and VPS deployment.",
    image:
      "https://res.cloudinary.com/didovzx3t/image/upload/v1768926505/Screenshot_2026-01-20_at_21.52.08_mlged3.png",
    tags: ["Nx", "NestJS", "React", "TypeScript", "VPS"],
    links: {
      demo: "https://mailtr.co/about",
      repo: "https://github.com/The-Regiment/mailtr",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing expertise in full-stack development and DevOps practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl group bg-card hover:-translate-y-1">
                {/* Project Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Folder size={20} />
                  </div>
                </div>

                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-medium px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 gap-3">
                  {project.links.demo && (
                    <Button
                      asChild
                      size="sm"
                      className="w-full gap-2 transition-all hover:brightness-110 cursor-pointer"
                    >
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} /> Demo
                      </a>
                    </Button>
                  )}
                  {project.links.repo && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full gap-2 hover:bg-secondary cursor-pointer"
                    >
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} /> Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
