import { Zap, BookOpen, GitFork } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get your project up and running in seconds with our pre-configured templates.",
    },
    {
      icon: BookOpen,
      title: "Extensive Template Library",
      description: "Choose from a wide range of templates for various frameworks and project types.",
    },
    {
      icon: GitFork,
      title: "Customizable",
      description: "Easily extend and customize templates to fit your specific project requirements.",
    },
  ]

  return (
    <>
      <Header />
      <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card shadow-lg">
                <feature.icon className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-xl font-bold text-center">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
