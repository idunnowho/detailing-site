import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 35.4676,
  lng: -97.5164
}

function Contact() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/beautiful.webp')" }}>
      <div className="min-h-screen bg-black bg-opacity-70 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input type="text" id="name" name="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input type="email" id="email" name="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" name="message" placeholder="How can we help you?" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-600 mr-2" />
                  <span>(405) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-600 mr-2" />
                  <span>contact@okccardetailing.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-600 mr-2" />
                  <span>Oklahoma City, OK</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-600 mr-2" />
                  <span>Mon-Fri: 8am-6pm, Sat: 9am-4pm</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white bg-opacity-90 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Service Area</h2>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact