import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Have a project in mind or want to discuss a collaboration? I&apos;d love to hear from you!</p>
        </div>
        <Contact />
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto text-center sm:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Information</h2>
              <p className="mb-2"><strong>Email:</strong> sumangalkaran44@gmail.com</p>
              <p className="mb-2"><strong>Phone:</strong> +91 9564114832</p>
              <p className="mb-2"><strong>Location:</strong> Midnapore, India</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Office Hours</h2>
              <p className="mb-2"><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
              <p className="mb-2"><strong>Saturday - Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

