import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

type ChangelogEntry = {
  version: string
  date: string
  changes: {
    type: "added" | "changed" | "fixed"
    description: string
  }[]
}

const changelog: ChangelogEntry[] = [
  {
    version: "1.2.0",
    date: "2024-02-21",
    changes: [
      { type: "added", description: "Support for Vue 3 templates" },
      { type: "changed", description: "Improved error handling in CLI commands" },
      { type: "fixed", description: "Updated dependencies to latest versions" },
    ],
  },
  {
    version: "1.1.0",
    date: "2024-01-15",
    changes: [
      { type: "added", description: "Introduced custom template support" },
      { type: "added", description: "New React Native template" },
      { type: "fixed", description: "Bug in Next.js template generation" },
    ],
  },
  {
    version: "1.0.0",
    date: "2023-12-01",
    changes: [
      { type: "added", description: "Initial release of SkeleCLI" },
      { type: "added", description: "Support for React, Next.js, and Express templates" },
      { type: "added", description: "Basic CLI functionality implemented" },
    ],
  },
]

export default function Changelog() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Changelog</h1>
        <p className="text-lg text-muted-foreground mb-8">
          All notable changes to SkeleCLI will be documented in this file.
        </p>
        <ScrollArea className="h-[60vh] md:h-[70vh] rounded-md border p-4">
          {changelog.map((entry, index) => (
            <div key={entry.version} className="mb-8 last:mb-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">v{entry.version}</h2>
                <Badge variant="outline">{entry.date}</Badge>
              </div>
              <ul className="space-y-3">
                {entry.changes.map((change, changeIndex) => (
                  <li key={changeIndex} className="flex items-start">
                    <Badge
                      className="mt-1 mr-2"
                      variant={
                        change.type === "added" ? "default" : change.type === "changed" ? "secondary" : "destructive"
                      }
                    >
                      {change.type}
                    </Badge>
                    <span>{change.description}</span>
                  </li>
                ))}
              </ul>
              {index < changelog.length - 1 && <Separator className="my-8" />}
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}

