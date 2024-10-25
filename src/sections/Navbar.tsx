import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Car, Menu, X } from 'lucide-react'



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-1">
            <Link to="/" className="flex-shrink-0">
              <Car className="h-8 w-8" />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">Home</Link>
                <Link to="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">Services</Link>
                <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">About</Link>
                <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">Contact</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/book" className="px-4 py-2 rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90">Book Now</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">Home</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">Services</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-primary-foreground/10">
            <div className="px-2">
              <Link to="/book" className="block w-full px-4 py-2 text-center rounded-md text-base font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90">Book Now</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}