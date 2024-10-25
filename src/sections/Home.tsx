import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.jpg?height=1080&width=1920')" }}>
      <div className="min-h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to Our Car Detailing Service</h1>
        <p className="text-xl md:text-2xl mb-8 text-center">Experience the best car detailing in town!</p>
        <Link to='/book' className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
          Book Now
        </Link>
      </div>
    </div>
  )
}