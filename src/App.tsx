// import './App.css'
// import { About } from './components/about'
import { Footer } from './components/footer'
import { NavBar } from './components/nav-bar'
// import { Projects } from './components/projects'
import { TitleCard } from './components/title-card'

function App() {

  return (
    <>
      <div className="container py-2 px-6 flex flex-col justify-between min-h-screen">
        <NavBar />
        <TitleCard />
        
        
        {/* <About />
        <Projects /> */}
      <Footer />
      </div>
    </>
  )
}

export default App
