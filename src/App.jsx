import { Box, Separator } from "@chakra-ui/react"
import { Demo } from "./Components/Demo"
import Navbar from "./Components/Navbar"
import Hero from "./Components/pages/Hero"
import ProjectsSection from "./Components/pages/ProjectsSection"
import Footer from "./Components/pages/Footer"
import AboutSection from "./Components/pages/AboutSection"

function App() {
 
  return (
    <Box>
      <Navbar/>
      <Hero/>
      <Separator/>
      <ProjectsSection/>
      <Separator/>
      <AboutSection/>
      <Separator/>
      <Footer/>
    </Box>
  )
}

export default App
