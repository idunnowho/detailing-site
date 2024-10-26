import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Droplets, Brush, SprayCan } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: 'Basic Wash',
    description: 'A quick and effective cleaning for your vehicle\'s exterior.',
    icon: Droplets,
    price: '$29.99',
    features: ['Exterior wash', 'Wheel cleaning', 'Window cleaning', 'Tire dressing'],
  },
  {
    title: 'Deluxe Wash',
    description: 'A comprehensive cleaning package for both exterior and interior.',
    icon: Brush,
    price: '$59.99',
    features: ['Everything in Basic Wash', 'Interior vacuuming', 'Dashboard and console cleaning', 'Door jamb cleaning'],
  },
  {
    title: 'Premium Detail',
    description: 'Our most thorough detailing service for the ultimate clean.',
    icon: Sparkles,
    price: '$119.99',
    features: ['Everything in Deluxe Wash', 'Clay bar treatment', 'Waxing', 'Leather conditioning', 'Engine bay cleaning'],
  },
  {
    title: 'Ceramic Coating',
    description: 'Long-lasting protection for your vehicle\'s paint.',
    icon: SprayCan,
    price: '$299.99',
    features: ['Paint correction', 'Ceramic coating application', '2-year warranty', 'Hydrophobic effect'],
  },
]

function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/services-bg.jpeg')" }}>
      <div className="min-h-screen bg-black bg-opacity-70 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                  >
                    View Details
                    <ChevronDown className={`h-4 w-4 transition-transform ${expandedService === index ? 'rotate-180' : ''}`} />
                  </Button>
                </CardContent>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedService === index ? 'auto' : 0,
                    opacity: expandedService === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <CardFooter className="flex flex-col items-start pt-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </CardFooter>
                </motion.div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services