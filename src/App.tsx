import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Home from './sections/Home'
import Services from './sections/Services'
import About from './sections/About'
import Contact from './sections/Contact'
import BookNow from './sections/BookNow'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookNow />} />
      </Routes>
    </Router>
  )
}

export default App