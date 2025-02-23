import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Docs() {
  return (
    <>
    <Header/>
    <section className="w-full h-screen py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Documentation</h2>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Getting Started</h3>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Button variant="outline">Read More</Button>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">API Reference</h3>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Button variant="outline">Explore API</Button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

