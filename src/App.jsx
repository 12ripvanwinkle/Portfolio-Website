import LogoSection from './components/sections/LogoSection'
import Navbar from './components/Navbar'
import FeatureCards from './components/sections/FeatureCards'
import Hero from './components/sections/Hero'
import ShowcaseSection from './components/sections/ShowcaseSection'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </>
  )
} 

export default App