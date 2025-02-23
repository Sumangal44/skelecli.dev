import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Templates() {
  const templates = [
    {
      name: "React",
      description: "A modern frontend framework for building user interfaces",
      features: ["JSX", "Component-based", "Virtual DOM"],
      version: "18.2.0",
    },
    {
      name: "Next.js",
      description: "The React framework for production-grade applications",
      features: ["Server-side rendering", "Static site generation", "API routes"],
      version: "13.4.0",
    },
    {
      name: "Vue",
      description: "Progressive JavaScript framework for building UIs",
      features: ["Reactive data binding", "Component system", "Virtual DOM"],
      version: "3.2.0",
    },
    {
      name: "Angular",
      description: "Platform for building mobile and desktop web applications",
      features: ["Two-way data binding", "Dependency injection", "TypeScript"],
      version: "15.0.0",
    },
    {
      name: "Express",
      description: "Fast, unopinionated, minimalist web framework for Node.js",
      features: ["Routing", "Middleware", "HTTP utilities"],
      version: "4.18.0",
    },
    {
      name: "FastAPI",
      description: "Modern, fast (high-performance) Python web framework",
      features: ["Async support", "Type hints", "OpenAPI (Swagger) docs"],
      version: "0.95.0",
    },
  ]

  return (
    <>
    <Header/>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8">
          Supported Templates
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.name}>
              <CardHeader>
                <CardTitle>{template.name}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.features.map((feature) => (
                    <Badge key={feature} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Version: {template.version}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Use Template
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

