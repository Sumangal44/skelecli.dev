import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">My Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Explore a collection of my best work, showcasing creativity and expertise in graphic design.</p>
        </div>
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

