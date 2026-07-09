import { Box, Separator } from "@chakra-ui/react"
import { Demo } from "./Components/Demo"
import Navbar from "./Components/Navbar"
import Hero from "./Components/pages/Hero"

function App() {
 
  return (
    <Box>
      <Navbar/>
      <Separator mx={4}/>
      <Hero/>
    </Box>
  )
}

export default App
