import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import { Button } from '@/components/ui/button'

const skillCategories = [
  {
    category: 'Design Software',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Sketch', 'Adobe XD', 'Affinity Designer'],
  },
  {
    category: '3D & Motion',
    skills: ['Blender', 'Cinema 4D', 'Adobe After Effects', 'Autodesk Maya'],
  },
  {
    category: 'Other',
    skills: ['Photography', 'Color Theory', 'Typography', 'Brand Strategy', 'UI/UX Design'],
  },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-12 md:py-24">
          <h1 className="mb-6 md:mb-8 text-3xl md:text-4xl font-bold">My Skills & Expertise</h1>
          <p className="mb-8 md:mb-12 text-lg md:text-xl text-muted-foreground">
            With years of experience in graphic design, I&apos;ve honed a diverse set of skills and mastered various tools to bring creative visions to life.
          </p>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <div key={index} className="rounded-lg border bg-card p-4 md:p-6">
                <h2 className="mb-3 md:mb-4 text-xl md:text-2xl font-semibold">{category.category}</h2>
                <ul className="list-inside list-disc space-y-1 md:space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm md:text-base">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Skills />
        <section className="container py-12 md:py-24 text-center">
          <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl font-bold">Ready to start a project?</h2>
          <p className="mb-6 md:mb-8 text-lg md:text-xl text-muted-foreground">Let&apos;s create something amazing together.</p>
          <Button size="lg" asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

