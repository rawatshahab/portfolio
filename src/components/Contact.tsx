import { useState } from "react"; // Import useState
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

  // 2. Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Helper to encode data for Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // 4. Handle Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }), // Include form-name
    })
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
                {/* 5. Update Form Tag attributes */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-netlify="true"
                  name="contact"
                >
                  {/* 6. CRITICAL: Hidden Input for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium ml-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name" // Added name
                        value={formData.name} // Added value
                        onChange={handleChange} // Added onChange
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
                        name="email" // Added name
                        type="email"
                        value={formData.email} // Added value
                        onChange={handleChange} // Added onChange
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
                      name="subject" // Added name
                      value={formData.subject} // Added value
                      onChange={handleChange} // Added onChange
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
                      name="message" // Added name
                      value={formData.message} // Added value
                      onChange={handleChange} // Added onChange
                      placeholder="Tell me about your project..."
                      className="min-h-[180px] bg-secondary/20 border-border/50 focus:bg-background transition-colors resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting} // Disable while sending
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