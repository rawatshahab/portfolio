import { motion } from "framer-motion";
import { 
  Database, 
  Server, 
  Layout, 
  Cloud, 
  ArrowRight 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Backend Architecture",
    description: "Design and implementation of scalable, high-performance backend systems. Expert in microservices patterns, REST/GraphQL APIs, and data modeling.",
    icon: <Server className="w-10 h-10 text-blue-500" />,
    features: ["Microservices Design", "API Development", "High Availability Systems"]
  },
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and pixel-perfect user interfaces. specialized in modern React ecosystems and state management.",
    icon: <Layout className="w-10 h-10 text-purple-500" />,
    features: ["Responsive Design", "Performance Optimization", "Complex State Management"]
  },
  {
    title: "Database Design",
    description: "Architecting efficient database schemas for complex data relationships. Experience with both SQL and NoSQL solutions for optimal performance.",
    icon: <Database className="w-10 h-10 text-green-500" />,
    features: ["Schema Design", "Query Optimization", "Data Migration Strategies"]
  },
  {
    title: "DevOps & Cloud",
    description: "Streamlining development lifecycles with robust CI/CD pipelines, containerization, and automated infrastructure management.",
    icon: <Cloud className="w-10 h-10 text-orange-500" />,
    features: ["Docker & Kubernetes", "SMTP & DNS Management", "CI/CD Pipelines", "AWS/Cloud Setup"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Services Provided</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your business needs, from architecture to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    {service.icon}
                </div>
                
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Discuss Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;