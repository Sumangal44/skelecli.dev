"use client";
import { Button } from "@/components/ui/button";
import { Terminal, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx skelecli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="h-screen container flex flex-col lg:flex-row items-center justify-between gap-8 py-12 md:py-24">
      <div className="flex flex-col items-center lg:items-center text-center lg:text-left space-y-4 flex-1">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          SkeleCLI: Your Project Template Generator
        </h1>
        <p className="max-w-[700px] text-base sm:text-lg text-muted-foreground">
          Instantly scaffold your projects with customizable templates. No
          global installation required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs">Read Docs</Link>
          </Button>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <div className="relative">
            <div className="flex items-center justify-between rounded-md bg-muted p-4">
              <div className="flex items-center">
                <Terminal className="mr-2 h-4 w-4" />
                <code className="text-sm font-mono  justify-center ">
                  npx skelecli
                </code>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={copyCommand}
                className="h-8 w-8"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">Copy command</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
