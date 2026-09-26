import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import BackroomsPlayer from './components/BackroomsPlayer'
import { ProjectsProgressProvider } from './context/ProjectsProgress'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <BackroomsPlayer />
      <Hero onOpenPalette={() => setPaletteOpen(true)} />
      <About />
      <TechStack />
      <ProjectsProgressProvider>
        <Projects />
        <Stats />
        <Footer />
      </ProjectsProgressProvider>
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </div>
  )
}
