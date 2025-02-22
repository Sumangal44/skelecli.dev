import { Zap, BookOpen, GitFork } from "lucide-react"

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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Key Features</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card">
              <feature.icon className="h-8 w-8 mb-2" />
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

