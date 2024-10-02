import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './Pages/Home.jsx'
import Analytics from './Pages/Analytics.jsx'
import NewsLetter from './Pages/NewsLetter.jsx'
import Cards from './Pages/Cards.jsx'

const App = () => {
  return (
    <div>
      <header className=''>
        <Navbar />
      </header>

    <main className=''>
      <Home />
      <Analytics />
      <NewsLetter />
      <Cards />
    </main>

      <footer className=''>
        <Footer />
      </footer>
    </div>
  )
}

export default App;