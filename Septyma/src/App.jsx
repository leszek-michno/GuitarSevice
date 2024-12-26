import './App.css'
import { Footer } from './components/Footer'
import NavBarPl from './components/NavBar'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Homepage } from './pagesPl/Homepage'
import { Offer } from './pagesPl/Offer'
// import { Realization } from './pagesPl/Realization'
import { Contact } from './pagesPl/Contact'
import { HomepageEng } from './pagesEng/HomepageEng'
import { OfferEng } from './pagesEng/OfferEng'
// import { RealizationEng } from './pagesEng/RealizationEng'
import { ContactEng } from './pagesEng/ContactEng'

function App() {


  return (
    <Router> 
      <ScrollToTop/>
      <div className='container'>
        <NavBarPl/>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Oferta" element={<Offer/>} />
            {/* <Route path="/Realizacje" element={<Realization/>} /> */}
            <Route path="/Kontakt" element={<Contact/>} />
            <Route path="/Homepage" element={<HomepageEng />} />
            <Route path="Offer" element={<OfferEng />} />
            {/* <Route path="Realization" element={<RealizationEng />} /> */}
            <Route path="Contact" element={<ContactEng/>} />
            
          </Routes>     
      <Footer/>
      </div>
    </Router>
  )
}

export default App
