import Header from '@/components/Header'
import Hero from '@/components/Hero'
// import Portfolio from '@/components/Portfolio'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* <Portfolio /> */}
        <Features />
        <Services />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

