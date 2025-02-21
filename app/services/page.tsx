import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import { Button } from '@/components/ui/button'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">My Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">I offer a range of professional design services to help elevate your brand and visual communication.</p>
        </div>
        <Services />
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">Let&apos;s collaborate and bring your vision to life.</p>
          <Button size="lg" asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

