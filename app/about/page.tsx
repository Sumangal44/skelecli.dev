import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Hi, I&apos;m [Your Name], a passionate graphic designer with over [X] years of experience in creating visually stunning and effective designs for clients across various industries.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                My journey in design began [brief background]. Since then, I&apos;ve honed my skills in [list key skills] and have had the pleasure of working with [types of clients or notable projects].
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                My design philosophy centers around [your design approach or values]. I believe that great design has the power to [impact or goal of your work].
              </p>
              <Button size="lg" asChild className="mx-auto lg:mx-0">
                <a href="/contact">Let&apos; Work Together</a>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] order-first lg:order-last">
              <Image
                src="https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg"
                alt="Designer Name"
                fill
                style={{objectFit: "cover"}}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="bg-muted py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Design Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Discovery", description: "Understanding your needs and goals" },
                { title: "Conceptualization", description: "Brainstorming and sketching ideas" },
                { title: "Design", description: "Bringing concepts to life digitally" },
                { title: "Refinement", description: "Iterating based on feedback" }
              ].map((step, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

