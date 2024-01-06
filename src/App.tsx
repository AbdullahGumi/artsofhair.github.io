import Fade from 'react-reveal/Fade';
import {Element} from 'react-scroll';

import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import SalonSection from './components/SalonSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={}
    //     />
    //   </Routes>
    // </BrowserRouter>
    <>
      <div className="container mx-auto px-4 py-12">
        <Fade>
          <Navbar />
          <WelcomeSection />
        </Fade>
        <Element name="salon" className="element">
          <SalonSection />
        </Element>
        <Element name="services" className="element">
          <ServicesSection />
        </Element>
        <Element name="team" className="element">
          <TeamSection />
        </Element>
      </div>
      <Element name="kontakt" className="element">
        <Footer />
      </Element>
    </>
  );
}

export default App;
