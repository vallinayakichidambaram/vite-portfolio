// import './App.css'
import { About } from './components/about'
import { Footer } from './components/footer'
import { NavBar } from './components/nav-bar'
import { Projects } from './components/projects'
import { TitleCard } from './components/title-card'

function App() {

  return (
    <>
      <div className="container my-5 mx-16">
        <div className="min-h-screen">
        <NavBar />
        <TitleCard />
        </div>
        
        <About />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
