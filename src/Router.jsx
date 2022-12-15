import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

import { Inicio } from './pages/Inicio'
import { Sobre } from './pages/Sobre'
import { GithubLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react'

export function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
