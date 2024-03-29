import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MyWork from './components/My-Work'
import ParticleComponent from './components/ParticleComponent'
import ResumePage from './components/Resume'

function App() {
  return (
    <>
      <ParticleComponent />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='resume' element={<ResumePage/>}/>
          <Route path="my-work" element={<MyWork />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
