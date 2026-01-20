import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>1. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                The content on this website, including but not limited to code snippets, 
                designs, text, graphics, and logos, is the intellectual property of Mayank Rawat 
                unless otherwise stated. You may not reproduce, distribute, or use this content 
                for commercial purposes without explicit permission.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>2. Use of Code</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                Any code snippets provided in the "Projects" or "Blog" sections are for 
                educational and demonstration purposes. While you are free to learn from them, 
                we accept no liability for their use in production environments.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>3. Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p>
                This website is provided "as is," without warranty of any kind. We make no 
                guarantees regarding the accuracy, reliability, or completeness of the 
                content provided herein.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;