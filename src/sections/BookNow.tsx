import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// This would typically come from a backend API
const services = [
  { id: 'basic', name: 'Basic Wash', price: 30, duration: '1 hour' },
  { id: 'deluxe', name: 'Deluxe Wash', price: 60, duration: '2 hours' },
  { id: 'premium', name: 'Premium Detail', price: 120, duration: '4 hours' },
  { id: 'interior', name: 'Interior Deep Clean', price: 80, duration: '3 hours' },
]

export default function BookNow() {
  const [selectedService, setSelectedService] = useState(services[0])
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const handleServiceChange = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId)
    if (service) setSelectedService(service)
  }

  const handleDateChange = (value: string) => setSelectedDate(value)
  const handleTimeChange = (value: string) => setSelectedTime(value)

  const isBookingComplete = selectedService && selectedDate && selectedTime

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Book Your Car Detailing Service</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Select Your Service</CardTitle>
              <CardDescription>Choose the detailing package that best fits your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup onValueChange={handleServiceChange} defaultValue={selectedService.id}>
                {services.map((service) => (
                  <div key={service.id} className="flex items-center space-x-2 mb-4">
                    <RadioGroupItem value={service.id} id={service.id} />
                    <Label htmlFor={service.id} className="flex justify-between w-full">
                      <span>{service.name}</span>
                      <span>${service.price}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Choose Date & Time</CardTitle>
              <CardDescription>Select your preferred appointment slot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Select onValueChange={handleDateChange}>
                  <SelectTrigger id="date">
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-10-26">October 26, 2024</SelectItem>
                    <SelectItem value="2024-10-27">October 27, 2024</SelectItem>
                    <SelectItem value="2024-10-28">October 28, 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Select onValueChange={handleTimeChange}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Booking Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Service:</strong> {selectedService.name}</p>
              <p><strong>Price:</strong> ${selectedService.price}</p>
              <p><strong>Duration:</strong> {selectedService.duration}</p>
              <p><strong>Date:</strong> {selectedDate || 'Not selected'}</p>
              <p><strong>Time:</strong> {selectedTime || 'Not selected'}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={!isBookingComplete}>
              <Calendar className="mr-2 h-4 w-4" /> Confirm Booking
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}