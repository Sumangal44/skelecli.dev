import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Get Started",
  description:
    "Get started with SkeleCLI by installing it globally and generating a new project."
};

export default function GetStarted() {
  return (
    <>
      <Header />
      <section className="w-full h-screen py-12 md:py-24 lg:py-32 bg-muted ">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 ">
            Get Started with SkeleCLI
          </h1>
          <div className="space-y-8">
          <div>
              <h2 className="text-2xl font-semibold mb-4">
                Usage
              </h2>
              <div className="bg-muted p-4 rounded-lg flex items-center space-x-4 justify-center ">
                <Terminal className="h-6 w-6" />
                <code className="text-sm font-mono ">
                  npx skelecli
                </code>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Global Installation
              </h2>
              <p className="text-lg mb-4">
                You can install SkeleCLI globally using npm. This allows you to
                use the `skelecli` command from anywhere in your terminal.
              </p>
              <div className="bg-muted p-4 rounded-lg flex items-center space-x-4 justify-center ">
                <Terminal className="h-6 w-6" />
                <code className="text-sm font-mono ">
                  npm install -g skelecli
                </code>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Usage</h2>
              <p className="text-lg mb-4">
                After installation, you can use SkeleCLI to generate a new
                project:
              </p>
              <div className="bg-muted p-4 rounded-lg flex items-center space-x-4 justify-center">
                <Terminal className="h-6 w-6" />
                <code className="text-sm font-mono">
                  skelecli 
                </code>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
              <p className="text-lg mb-4">
                Check out our templates and documentation to learn more about
                SkeleCLI&apos;s features and capabilities.
              </p>
              <div className="flex space-x-4 items-center justify-center">
                <Link href="/templates">
                  <Button>View Templates</Button>
                </Link>
                <Button variant="outline">Read Docs</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
