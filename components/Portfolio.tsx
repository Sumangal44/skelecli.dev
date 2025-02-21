'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const projects = [
  { id: 1, title: 'Project 1', category: 'portfolio', image: 'https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg' },
  { id: 2, title: 'Project 2', category: 'ecommerce', image: 'https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg' },
  { id: 3, title: 'Project 3', category: 'others', image: 'https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg' },
  { id: 4, title: 'Project 4', category: 'portfolio', image: 'https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg' },
  { id: 5, title: 'Project 5', category: 'ecommerce', image: 'https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg' },
  { id: 6, title: 'Project 6', category: 'others', image: 'https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg' },
]

const categories = ['all', 'portfolio','ecommerce','others',]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="portfolio" className="container py-12 md:py-24">
      <h2 className="mb-8 md:mb-12 text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-center">Portfolio</h2>
      <div className="mb-8 flex flex-wrap gap-2 md:gap-4">
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant={filter === category ? 'default' : 'outline'}
            size="sm"
            className="text-xs md:text-sm"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(project => (
          <div key={project.id} className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              loading='lazy'
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

