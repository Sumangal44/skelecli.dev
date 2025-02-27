"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Copy,
  Terminal,
  Code,
  BookOpen,
  Github,
  Star,
  FileCode,
  Package,
  Zap,
  Search
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-background to-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="px-3 py-1 text-sm" variant="secondary">
              Documentation
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              SkeleCLI Docs
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to know about using SkeleCLI to scaffold your
              projects quickly and efficiently.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="getting-started" className="w-full">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar Navigation */}
              <div className="md:w-64 lg:w-72 shrink-0">
                <div className="sticky top-20">
                  <TabsList className="flex h-auto w-full flex-col items-stretch p-0 bg-transparent space-y-1">
                    <TabsTrigger
                      value="getting-started"
                      className="justify-start px-4 py-2 h-10 font-medium"
                    >
                      Getting Started
                    </TabsTrigger>
                    <TabsTrigger
                      value="commands"
                      className="justify-start px-4 py-2 h-10 font-medium"
                    >
                      Commands
                    </TabsTrigger>
                    <TabsTrigger
                      value="templates"
                      className="justify-start px-4 py-2 h-10 font-medium"
                    >
                      Templates
                    </TabsTrigger>
                    <TabsTrigger
                      value="contributing"
                      className="justify-start px-4 py-2 h-10 font-medium"
                    >
                      Contributing
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1">
                <TabsContent
                  value="getting-started"
                  className="mt-0 border-0 p-0"
                >
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                        <BookOpen className="h-6 w-6" /> Getting Started
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Learn how to install and use SkeleCLI to generate
                        project scaffolding quickly and efficiently.
                      </p>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Installation</CardTitle>
                        <CardDescription>
                          Install SkeleCLI globally to use it from anywhere on
                          your system.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                            <code>npm install -g skelecli</code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2"
                            onClick={() =>
                              copyToClipboard("npm install -g skelecli")
                            }
                          >
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Copy code</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Start</CardTitle>
                        <CardDescription>
                          Create your first project with SkeleCLI in seconds.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                            <code>npx skelecli </code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2"
                            onClick={() => copyToClipboard("npx skelecli")}
                          >
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Copy code</span>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          This command will prompt you to select a template and
                          configure your project.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="bg-muted rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                            <Terminal className="h-3 w-3 text-primary-foreground" />
                          </div>
                          <span>
                            Explore the{" "}
                            <Link
                              href="#commands"
                              className="text-primary hover:underline"
                            >
                              available commands
                            </Link>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                            <FileCode className="h-3 w-3 text-primary-foreground" />
                          </div>
                          <span>
                            Learn about the{" "}
                            <Link
                              href="#templates"
                              className="text-primary hover:underline"
                            >
                              built-in templates
                            </Link>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                            <Github className="h-3 w-3 text-primary-foreground" />
                          </div>
                          <span>
                            Contribute to the{" "}
                            <Link
                              href="https://github.com/Sumangal44/SkeleCLI"
                              className="text-primary hover:underline"
                            >
                              project on GitHub
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="commands" className="mt-0 border-0 p-0">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                        <Terminal className="h-6 w-6" /> Commands
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Explore all available commands and options in SkeleCLI.
                      </p>
                    </div>

                    <div className="grid gap-6">
                      <Card>
                        <CardHeader className="bg-muted/50">
                          <CardTitle className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono">
                              create
                            </Badge>
                            <span>Create a new project</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="relative">
                              <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                                <code>
                                  skelecli create [project-name] [--template
                                  &lt;template&gt;]
                                </code>
                              </pre>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-2"
                                onClick={() =>
                                  copyToClipboard(
                                    "skelecli create [project-name] [--template <template>]"
                                  )
                                }
                              >
                                <Copy className="h-4 w-4" />
                                <span className="sr-only">Copy code</span>
                              </Button>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Arguments</h4>
                              <ul className="space-y-1 text-sm">
                                <li>
                                  <code className="text-primary font-semibold">
                                    project-name
                                  </code>{" "}
                                  - Name of the project to create (optional,
                                  will prompt if not provided)
                                </li>
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Options</h4>
                              <ul className="space-y-1 text-sm">
                                <li>
                                  <code className="text-primary font-semibold">
                                    --template, -t
                                  </code>{" "}
                                  - Specify a template to use (optional, will
                                  prompt if not provided)
                                </li>
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Examples</h4>
                              <div className="space-y-2">
                                <div className="relative">
                                  <pre className="bg-muted p-2 rounded-md overflow-x-auto font-mono text-sm">
                                    <Code>skelecli create my-app</Code>
                                  </pre>
                                </div>
                                <div className="relative">
                                  <pre className="bg-muted p-2 rounded-md overflow-x-auto font-mono text-sm">
                                    <code>
                                      skelecli create my-api --template node-api
                                    </code>
                                  </pre>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-muted/50">
                          <CardTitle className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono">
                              template
                            </Badge>
                            <span>Manage templates</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <h4 className="font-semibold">template list</h4>
                              <div className="relative">
                                <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                                  <code>skelecli template list</code>
                                </pre>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-2 top-2"
                                  onClick={() =>
                                    copyToClipboard("skelecli template list")
                                  }
                                >
                                  <Copy className="h-4 w-4" />
                                  <span className="sr-only">Copy code</span>
                                </Button>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Lists all available templates.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h4 className="font-semibold">template add</h4>
                              <div className="relative">
                                <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                                  <code>
                                    skelecli template add &lt;template-path&gt;
                                    [--name &lt;name&gt;]
                                  </code>
                                </pre>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-2 top-2"
                                  onClick={() =>
                                    copyToClipboard(
                                      "skelecli template add <template-path> [--name <name>]"
                                    )
                                  }
                                >
                                  <Copy className="h-4 w-4" />
                                  <span className="sr-only">Copy code</span>
                                </Button>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Adds a custom template from a local directory.
                              </p>
                              <div className="space-y-2">
                                <h5 className="font-medium">Arguments</h5>
                                <ul className="space-y-1 text-sm">
                                  <li>
                                    <code className="text-primary font-semibold">
                                      template-path
                                    </code>{" "}
                                    - Path to the template directory
                                  </li>
                                </ul>
                              </div>
                              <div className="space-y-2">
                                <h5 className="font-medium">Options</h5>
                                <ul className="space-y-1 text-sm">
                                  <li>
                                    <code className="text-primary font-semibold">
                                      --name, -n
                                    </code>{" "}
                                    - Name for the template (optional, will
                                    prompt if not provided)
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-muted/50">
                          <CardTitle className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono">
                              help
                            </Badge>
                            <span>Display help information</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="relative">
                              <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                                <code>skelecli --help</code>
                              </pre>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-2"
                                onClick={() =>
                                  copyToClipboard("skelecli --help")
                                }
                              >
                                <Copy className="h-4 w-4" />
                                <span className="sr-only">Copy code</span>
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Displays help information for SkeleCLI or a
                              specific command.
                            </p>
                            <div className="relative">
                              <pre className="bg-muted p-2 rounded-md overflow-x-auto font-mono text-sm">
                                <code>skelecli create --help</code>
                              </pre>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="templates" className="mt-0 border-0 p-0">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                        <Package className="h-6 w-6" /> Templates
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Explore the built-in templates and learn how to create
                        your own.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Card className="overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-b">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="secondary"
                              className="bg-blue-500/10 text-blue-700 hover:bg-blue-500/20"
                            >
                              react-ts
                            </Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                copyToClipboard(
                                  "skelecli create my-app --template react-ts"
                                )
                              }
                            >
                              <Terminal className="h-4 w-4" />
                            </Button>
                          </div>
                          <CardTitle>React with TypeScript</CardTitle>
                          <CardDescription>
                            Modern React application with TypeScript support
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-blue-500" />
                              <span>React 18 with TypeScript</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-blue-500" />
                              <span>Modern project structure</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-blue-500" />
                              <span>Ready-to-use component examples</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter className="bg-muted/30 px-6 py-4">
                          <code className="text-xs">
                            skelecli create my-app --template react-ts
                          </code>
                        </CardFooter>
                      </Card>

                      <Card className="overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-b">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="secondary"
                              className="bg-green-500/10 text-green-700 hover:bg-green-500/20"
                            >
                              node-api
                            </Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                copyToClipboard(
                                  "skelecli create my-api --template node-api"
                                )
                              }
                            >
                              <Terminal className="h-4 w-4" />
                            </Button>
                          </div>
                          <CardTitle>Node.js API</CardTitle>
                          <CardDescription>
                            Express.js API with RESTful endpoints
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-green-500" />
                              <span>Express.js with modern ES modules</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-green-500" />
                              <span>RESTful API structure</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-green-500" />
                              <span>Error handling middleware</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter className="bg-muted/30 px-6 py-4">
                          <code className="text-xs">
                            skelecli create my-api --template node-api
                          </code>
                        </CardFooter>
                      </Card>

                      <Card className="overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-b">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="secondary"
                              className="bg-purple-500/10 text-purple-700 hover:bg-purple-500/20"
                            >
                              nextjs
                            </Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                copyToClipboard(
                                  "skelecli create my-app --template nextjs"
                                )
                              }
                            >
                              <Terminal className="h-4 w-4" />
                            </Button>
                          </div>
                          <CardTitle>Next.js Application</CardTitle>
                          <CardDescription>
                            Full-stack Next.js application
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-purple-500" />
                              <span>Next.js with App Router</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-purple-500" />
                              <span>Server and client components</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-purple-500" />
                              <span>API routes and server actions</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter className="bg-muted/30 px-6 py-4">
                          <code className="text-xs">
                            skelecli create my-app --template nextjs
                          </code>
                        </CardFooter>
                      </Card>

                      <Card className="overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-b">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="secondary"
                              className="bg-orange-500/10 text-orange-700 hover:bg-orange-500/20"
                            >
                              cli
                            </Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                copyToClipboard(
                                  "skelecli create my-cli --template cli"
                                )
                              }
                            >
                              <Terminal className="h-4 w-4" />
                            </Button>
                          </div>
                          <CardTitle>CLI Tool</CardTitle>
                          <CardDescription>
                            Node.js CLI application boilerplate
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-orange-500" />
                              <span>Commander.js for CLI arguments</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-orange-500" />
                              <span>Inquirer.js for interactive prompts</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-orange-500" />
                              <span>Chalk for colorful terminal output</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter className="bg-muted/30 px-6 py-4">
                          <code className="text-xs">
                            skelecli create my-cli --template cli
                          </code>
                        </CardFooter>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Creating Custom Templates</CardTitle>
                        <CardDescription>
                          Learn how to create and share your own project
                          templates.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p>
                          You can create your own templates and add them to
                          SkeleCLI. A template is simply a directory with the
                          files you want to include in your project.
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-semibold">Template Structure</h4>
                          <div className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                            <pre>
                              <code>{`my-template/
├── package.json
├── src/
│   ├── index.js
│   └── ...
├── README.md
└── template.json  # Template metadata`}</code>
                            </pre>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold">Template Metadata</h4>
                          <p className="text-sm text-muted-foreground">
                            Create a <code>template.json</code> file in your
                            template directory with the following structure:
                          </p>
                          <div className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                            <pre>
                              <code>{`{
  "name": "My Custom Template",
  "id": "my-template",
  "description": "A brief description of the template",
  "created": "2023-01-01T00:00:00.000Z"
}`}</code>
                            </pre>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold">
                            Adding Your Template
                          </h4>
                          <div className="relative">
                            <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                              <code>
                                skelecli template add ./path/to/my-template
                                --name &quot;My Template&quot;
                              </code>
                            </pre>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-2"
                              onClick={() =>
                                copyToClipboard(
                                  'skelecli template add ./path/to/my-template --name "My Template"'
                                )
                              }
                            >
                              <Copy className="h-4 w-4" />
                              <span className="sr-only">Copy code</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="contributing" className="mt-0 border-0 p-0">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                        <Github className="h-6 w-6" /> Contributing
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Learn how to contribute to SkeleCLI and help improve the
                        project.
                      </p>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Development Setup</CardTitle>
                        <CardDescription>
                          Set up your local development environment to
                          contribute to SkeleCLI.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                            <code>{`# Clone the repository
git clone https://github.com/username/skelecli.git

# Navigate to the project directory
cd skelecli

# Install dependencies
npm install

# Link the package locally for testing
npm link`}</code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2"
                            onClick={() =>
                              copyToClipboard(`# Clone the repository
git clone https://github.com/username/skelecli.git

# Navigate to the project directory
cd skelecli

# Install dependencies
npm install

# Link the package locally for testing
npm link`)
                            }
                          >
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Copy code</span>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          After setting up, you can run SkeleCLI locally to test
                          your changes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Contribution Guidelines</CardTitle>
                        <CardDescription>
                          Follow these guidelines to contribute to SkeleCLI.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Code Style</h4>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            <li>Use ES6+ syntax</li>
                            <li>Follow the existing code style</li>
                            <li>Write clear, descriptive commit messages</li>
                            <li>Add comments for complex logic</li>
                            <li>Write tests for new features</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold">
                            Pull Request Process
                          </h4>
                          <ol className="space-y-1 text-sm list-decimal pl-5">
                            <li>Fork the repository</li>
                            <li>
                              Create a new branch for your changes (
                              <code>
                                git checkout -b feature/amazing-feature
                              </code>
                              )
                            </li>
                            <li>Make your changes</li>
                            <li>
                              Run tests to ensure your changes don&apos;t break
                              existing functionality
                            </li>
                            <li>
                              Commit your changes (
                              <code>
                                git commit -m &apos;Add some amazing
                                feature&apos;
                              </code>
                              )
                            </li>
                            <li>
                              Push to the branch (
                              <code>
                                git push origin feature/amazing-feature
                              </code>
                              )
                            </li>
                            <li>Submit a pull request</li>
                          </ol>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold">Adding Templates</h4>
                          <p className="text-sm text-muted-foreground">
                            Templates are a core part of SkeleCLI. Here&apos;s
                            how to add a new template:
                          </p>
                          <ol className="space-y-1 text-sm list-decimal pl-5">
                            <li>
                              Create a new directory in the{" "}
                              <code>templates/</code> directory with your
                              template name
                            </li>
                            <li>Add all necessary files for your template</li>
                            <li>
                              Create a <code>template.json</code> file with
                              metadata
                            </li>
                            <li>
                              Test your template by running{" "}
                              <code>
                                skelecli create test-project --template
                                your-template-id
                              </code>
                            </li>
                            <li>
                              Submit a pull request with your new template
                            </li>
                          </ol>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                      <div className="flex items-center gap-4 mb-4">
                        <Star className="h-8 w-8 text-primary" />
                        <h3 className="text-xl font-semibold">
                          Join Our Community
                        </h3>
                      </div>
                      <p className="mb-4">
                        We welcome contributors of all experience levels. Join
                        our community and help make SkeleCLI better for
                        everyone!
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button>
                          <Github className="mr-2 h-4 w-4" />
                          Star on GitHub
                        </Button>
                        <Button variant="outline">
                          <Code className="mr-2 h-4 w-4" />
                          View Issues
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="api" className="mt-0 border-0 p-0">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                        <Code className="h-6 w-6" /> API Reference
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Detailed API reference for programmatic usage of
                        SkeleCLI.
                      </p>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Programmatic Usage</CardTitle>
                        <CardDescription>
                          You can use SkeleCLI programmatically in your Node.js
                          applications.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">
                            <code>{`import { createProject, listTemplates } from 'skelecli';

// Create a new project
await createProject({
  name: 'my-project',
  template: 'react-ts',
  destination: './projects'
});

// List available templates
const templates = await listTemplates();
console.log(templates);`}</code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2"
                            onClick={() =>
                              copyToClipboard(`import { createProject, listTemplates } from 'skelecli';

// Create a new project
await createProject({
  name: 'my-project',
  template: 'react-ts',
  destination: './projects'
});

// List available templates
const templates = await listTemplates();
console.log(templates);`)
                            }
                          >
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Copy code</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold">API Methods</h3>

                      <Card>
                        <CardHeader>
                          <CardTitle className="font-mono text-lg">
                            createProject(options)
                          </CardTitle>
                          <CardDescription>
                            Creates a new project from a template.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold">Parameters</h4>
                            <div className="bg-muted p-4 rounded-md overflow-x-auto">
                              <pre className="text-sm">
                                <code>{`{
  name: string;         // Name of the project
  template: string;     // Template ID to use
  destination?: string; // Destination directory (default: current directory)
  overwrite?: boolean;  // Whether to overwrite existing files (default: false)
}`}</code>
                              </pre>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Returns</h4>
                            <p className="text-sm text-muted-foreground">
                              Promise that resolves to an object with
                              information about the created project.
                            </p>
                            <div className="bg-muted p-4 rounded-md overflow-x-auto">
                              <pre className="text-sm">
                                <code>{`{
  name: string;         // Name of the project
  template: string;     // Template used
  path: string;         // Path to the created project
  success: boolean;     // Whether the creation was successful
}`}</code>
                              </pre>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Example</h4>
                            <div className="bg-muted p-4 rounded-md overflow-x-auto">
                              <pre className="text-sm">
                                <code>{`import { createProject } from 'skelecli';

const result = await createProject({
  name: 'my-project',
  template: 'react-ts',
  destination: './projects',
  overwrite: true
});

console.log(\`Project created at \${result.path}\`);`}</code>
                              </pre>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="font-mono text-lg">
                            listTemplates()
                          </CardTitle>
                          <CardDescription>
                            Lists all available templates.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold">Returns</h4>
                            <p className="text-sm text-muted-foreground">
                              Promise that resolves to an array of template
                              objects.
                            </p>
                            <div className="bg-muted p-4 rounded-md overflow-x-auto">
                              <pre className="text-sm">
                                <code>{`[
  {
    id: string;         // Template ID
    name: string;       // Template name
    description: string; // Template description
    path: string;       // Path to the template
  },
  // ...
]`}</code>
                              </pre>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Example</h4>
                            <div className="bg-muted p-4 rounded-md overflow-x-auto">
                              <pre className="text-sm">
                                <code>{`import { listTemplates } from 'skelecli';

const templates = await listTemplates();
templates.forEach(template => {
  console.log(\`\${template.id}: \${template.name}\`);
});`}</code>
                              </pre>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="font-mono text-lg">
                            addTemplate(options)
                          </CardTitle>
                          <CardDescription>
                            Adds a custom template.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold">Parameters</h4>
                            <div className="bg-muted p-4 rounded-md overflow-x-auto">
                              <pre className="text-sm">
                                <code>{`{
  path: string;         // Path to the template directory
  name: string;         // Template name
  id?: string;          // Template ID (default: derived from name)
  description?: string; // Template description
  overwrite?: boolean;  // Whether to overwrite existing template (default: false)
}`}</code>
                              </pre>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Returns</h4>
                            <p className="text-sm text-muted-foreground">
                              Promise that resolves to an object with
                              information about the added template.
                            </p>
                            <div className="bg-muted p-4 rounded-md overflow-x-auto">
                              <pre className="text-sm">
                                <code>{`{
  id: string;           // Template ID
  name: string;         // Template name
  path: string;         // Path to the template
  success: boolean;     // Whether the addition was successful
}`}</code>
                              </pre>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Example</h4>
                            <div className="bg-muted p-4 rounded-md overflow-x-auto">
                              <pre className="text-sm">
                                <code>{`import { addTemplate } from 'skelecli';

const result = await addTemplate({
  path: './my-custom-template',
  name: 'My Custom Template',
  description: 'A custom template for my projects',
  overwrite: true
});

console.log(\`Template added with ID: \${result.id}\`);`}</code>
                              </pre>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </main>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to get started?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Install SkeleCLI today and start building your projects faster
                than ever.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="./docs">
              <Button size="lg" className="h-12">
                <Terminal className="mr-2 h-5 w-5" />
                Install SkeleCLI
              </Button>

              </Link>
              <Link href="https://github.com/Sumangal44/SkeleCLI">
              <Button size="lg" variant="outline" className="h-12">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
