"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const skills = [
  {
    name: "HTML",
    logo: "https://www.svgrepo.com/show/452228/html-5.svg"
  },
  {
    name: "CSS",  
    logo: "https://www.svgrepo.com/show/349330/css3.svg"
  },
  {
    name: "JavaScript",
    logo: "https://www.svgrepo.com/show/349419/javascript.svg"
  },
  {
    name: "TypeScript",
    logo: "https://www.svgrepo.com/show/374146/typescript-official.svg"
  },
  {
    name: "Python",
    logo: "https://www.svgrepo.com/show/452091/python.svg"

  },
  {
    name: "React",
    logo: "https://www.svgrepo.com/show/354259/react.svg"
  },
  {
    name: "Tailwind CSS",
    logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
  },
  {
    name: "Next.js",
    logo: "https://www.svgrepo.com/show/369457/nextjs.svg"
  },
  {
    name: "Astro",
    logo:"https://astro.build/assets/press/astro-icon-light-gradient.svg"

  },
  {
    name: "Git",
    logo: "https://www.svgrepo.com/show/452210/git.svg"
  },
  {
    name: "GitHub",
    logo: "https://www.svgrepo.com/show/439171/github.svg"
  }
];

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstElementChild;
    if (!scrollContent) return;

    const scrollAnimation = () => {
      if (scrollContainer.scrollLeft >= scrollContent.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const animationId = setInterval(scrollAnimation, 30);

    return () => clearInterval(animationId);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-muted py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
          Skills & Tools
        </h2>
        <div ref={scrollRef} className="flex overflow-x-hidden">
          <div className="flex animate-infinite-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="mx-4 md:mx-6 lg:mx-8 flex w-20 md:w-28 lg:w-32 flex-col items-center"
              >
                <div className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 relative">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    sizes="(max-width: 768px) 48px, (max-width: 1200px) 64px, 80px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-xs md:text-sm lg:text-base">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
