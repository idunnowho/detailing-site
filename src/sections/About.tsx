import { MapPin, Car, Sparkles, Star } from 'lucide-react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-500 to-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 text-white shadow-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Our Detailing Service
        </motion.h1>
        
        <motion.div 
          className="bg-white bg-opacity-95 shadow-lg rounded-lg overflow-hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
              <MapPin className="mr-2 h-6 w-6" />
              Located in the Heart of OKC
            </h2>
            <p className="mb-4 text-gray-700">
              We're proud to serve the Oklahoma City area with top-notch mobile detailing services. 
              Our convenient location allows us to reach customers all across the OKC metro, bringing 
              our expertise right to your doorstep.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white bg-opacity-95 shadow-lg rounded-lg overflow-hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
              <Car className="mr-2 h-6 w-6" />
              Mobile Detailing at Your Convenience
            </h2>
            <p className="mb-4 text-gray-700">
              We understand that your time is valuable. That's why we bring our professional detailing 
              services directly to you. Whether you're at home or at work, we'll ensure your vehicle 
              gets the care it deserves without disrupting your schedule.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white bg-opacity-95 shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
              <Sparkles className="mr-2 h-6 w-6" />
              Passion for Perfection
            </h2>
            <p className="mb-4 text-gray-700">
              At our core, we're car enthusiasts who genuinely enjoy the art of detailing. We find joy 
              in transforming vehicles and seeing the satisfaction on our customers' faces. Our passion 
              drives us to continually improve our skills and deliver the best possible results.
            </p>
            <div className="flex items-center justify-center mt-6">
              <Star className="h-8 w-8 text-yellow-400 mr-2" />
              <p className="text-lg font-semibold text-gray-800">
                We always strive for excellence in every detail
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p 
          className="text-center mt-8 text-white shadow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Thank you for considering our services. We look forward to making your car shine!
        </motion.p>
      </div>
    </div>
  )
}

export default About