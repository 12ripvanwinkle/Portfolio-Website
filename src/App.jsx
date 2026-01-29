import LogoSection from './components/sections/LogoSection'
import Navbar from './components/Navbar'
import FeatureCards from './components/sections/FeatureCards'
import Hero from './components/sections/Hero'
import ShowcaseSection from './components/sections/ShowcaseSection'
import ExperienceSection from './components/sections/ExperienceSection'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
} 

export default App