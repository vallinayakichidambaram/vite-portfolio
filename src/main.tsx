import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { About } from './components/about.tsx';
import { Projects } from './components/projects.tsx';
import { Layout } from './Layout.tsx';
import { TitleCard } from './components/title-card.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route  element={<Layout />} >
      <Route path="/" element={<TitleCard/>} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
