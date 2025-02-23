import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Docs() {
  return (
    <>
    <Header/>
    <section className="w-full h-screen py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Documentation</h2>
       
          <div className="flex flex-col items-center ">
            <h3 className="text-2xl font-bold">Getting Started</h3>
            <p className="text-lg text-muted-foreground text-center">Learn how to get started with the project and set up your development environment.</p>
          </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

