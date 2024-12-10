import './App.css'
import { ContactEng } from './assets/pagesEng/ContactEng'
import { HomepageEng } from './assets/pagesEng/HomepageEng'
import { OfferEng } from './assets/pagesEng/OfferEng'
import { RealizationEng } from './assets/pagesEng/RealizationEng'
import { Contact } from './assets/pagesPl/Contact'
import { Homepage } from './assets/pagesPl/Homepage'
import { Offer } from './assets/pagesPl/Offer'
import { Realization } from './assets/pagesPl/Realization'
import { Footer } from './components/Footer'
import NavBarPl from './components/NavBar'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <Router> 
      <ScrollToTop/>
      <div className='container'>
        <NavBarPl/>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Oferta" element={<Offer/>} />
            <Route path="/Realizacje" element={<Realization/>} />
            <Route path="/Kontakt" element={<Contact/>} />
            <Route path="/Homepage" element={<HomepageEng />} />
            <Route path="Offer" element={<OfferEng />} />
            <Route path="Realization" element={<RealizationEng />} />
            <Route path="Contact" element={<ContactEng/>} />
            
          </Routes>     
      <Footer/>
      </div>
    </Router>
  )
}

export default App
