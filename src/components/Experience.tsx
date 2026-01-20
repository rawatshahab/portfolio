import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Layout, Box, GitBranch, Database, Shield } from "lucide-react";

const expertise = [
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    description: "Building scalable microservices and RESTful APIs.",
    skills: ["NestJS", "Node.js", "n8n", "Express", "Microservices"]
  },
  {
    title: "Frontend Engineering",
    icon: <Layout className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    description: "Creating responsive, accessible, and performant user interfaces.",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "DevOps & Infrastructure",
    icon: <Box className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    description: "Streamlining deployment and containerization workflows.",
    skills: ["Docker", "SMTP Config", "DNS Management", "CI/CD"]
  },
  {
    title: "Database Management",
    icon: <Database className="w-6 h-6" />,
    color: "text-green-500",
    bg: "bg-green-500/10",
    description: "Designing efficient schemas and managing data persistence.",
    skills: ["PostgreSQL", "Prisma ORM", "Redis", "MongoDB"]
  },
  {
    title: "Version Control",
    icon: <GitBranch className="w-6 h-6" />,
    color: "text-red-500",
    bg: "bg-red-500/10",
    description: "Managing complex codebases with efficient branching strategies.",
    skills: ["Git", "GitHub Actions", "Code Review", "Collaboration"]
  },
  {
    title: "Security & Quality",
    icon: <Shield className="w-6 h-6" />,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    description: "Ensuring code quality and application security standards.",
    skills: ["Testing (Jest)", "Auth (JWT/OAuth)", "SonarQube", "Linting"]
  }
];

const Experience = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep diving into modern technologies to build enterprise-grade solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className={`mb-4 p-3 rounded-xl w-fit ${item.bg} ${item.color}`}>
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span key={skill} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-border/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;