import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  { name: 'John Doe', company: 'ABC Inc.', text: 'Working with this designer was an absolute pleasure. They captured our vision perfectly.' },
  { name: 'Jane Smith', company: 'XYZ Corp', text: 'The level of creativity and attention to detail is unmatched. Highly recommended!' },
  { name: 'Alex Johnson', company: '123 Studios', text: 'Our brand has seen significant growth since our redesign. Couldn\'t be happier with the results.' },
]

export default function Testimonials() {
  return (
    <section className="container py-12 md:py-24">
      <h2 className="mb-8 md:mb-12 text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-center">Testimonials</h2>
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="p-4 md:p-6">
              <p className="mb-4 text-sm md:text-base text-muted-foreground">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{testimonial.company}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

