import { CheckCircle } from 'lucide-react'

const services = [
  { title: 'Custom Web Development', description: 'Create a visually stunning website from scratch.' },
  { title: 'Responsive Design', description: 'Design layouts that adapt to different screen sizes.' },
  { title: 'Website Optimization', description: 'Improve website performance and SEO.' },
  { title: 'Maintenance & Support', description: 'Provide ongoing maintenance and support.' },
  
]

export default function Services() {
  return (
    <section className="container py-12 md:py-24">
      <h2 className="mb-8 md:mb-12 text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-center">Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div key={index} className="rounded-lg border bg-card p-4 md:p-6 text-card-foreground shadow">
            <CheckCircle className="mb-4 h-6 w-6 md:h-8 md:w-8 text-primary" />
            <h3 className="mb-2 text-lg md:text-xl font-semibold">{service.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

