"use client";
import { Button } from "@/components/ui/button";
import { Terminal, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./ui/badge";

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
        <Badge
          className="px-3 py-1 text-sm border border-green-500 text-green-500"
          variant="outline"
        >
          Latest v2.3.2
        </Badge>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">

    <section className="h-screen container flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12 md:py-24">
      {/* Left Side Content */}
      <div className="flex flex-col items-center lg:items-center text-center lg:text-left space-y-6 flex-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-balance">

          SkeleCLI: Your Project Template Generator
        </h1>
        <p className="max-w-xl text-lg sm:text-xl text-muted-foreground">
          Instantly scaffold your projects with customizable templates. No global installation required.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs">Read Docs</Link>
          </Button>
        </div>

        {/* Copy Command Section */}
        <div className="relative w-full max-w-md mt-4">
          <div className="flex items-center justify-between bg-muted p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 text-sm font-mono">
              <Terminal className="h-5 w-5 text-primary" />
              <code>npx skelecli</code>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={copyCommand}
              className="h-8 w-8 transition-all duration-200"
            >
              {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
              <span className="sr-only">Copy command</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
