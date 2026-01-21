import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  // 1. Manage Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    const formDataToSend = new FormData(form);
    formDataToSend.set("access_key", "e3be1817-5671-4ea3-878b-e35645f8b486");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Optional: Reset the actual HTML form if needed
        form.reset();
      } else {
        console.error("Error", data);
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error", error);
      toast.error("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-[100%] blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Send me a message and let's
            discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-secondary/30 border border-border/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently available for freelance work and open to full-time
                opportunities.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:mr.mayank2402@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-background/80 transition-all group border border-transparent hover:border-border/50"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Email</h4>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                      mr.mayank2402@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919813420403"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-background/80 transition-all group border border-transparent hover:border-border/50"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Phone</h4>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                      +91 9813420403
                    </p>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/h1uba1MVV4qNLBnt6"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-background/80 transition-all group border border-transparent hover:border-border/50 cursor-default"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Location</h4>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                      Hodal, Haryana
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="border-border/50 shadow-xl shadow-primary/5 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium ml-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-11 bg-secondary/20 border-border/50 focus:bg-background transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium ml-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-11 bg-secondary/20 border-border/50 focus:bg-background transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium ml-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="h-11 bg-secondary/20 border-border/50 focus:bg-background transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium ml-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="min-h-[180px] bg-secondary/20 border-border/50 focus:bg-background transition-colors resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-12 text-base font-medium transition-all hover:scale-[1.01] shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;