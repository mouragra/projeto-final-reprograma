import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

import { Inicio } from './pages/Inicio'
import { Sobre } from './pages/Sobre'
import { Mais } from './pages/Mais'
import { Logo } from './components/Logo'

import LogoImage from './assets/logo.png'

export function Router() {
  return (
    <BrowserRouter>
      <Logo image={LogoImage} alt="Logo com imagem de um cerebro na cor laranja e várias conexões tecnológicas dentro dele, na cor amarela, e logo abaixo escrito: Pense Acessível" />
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/mais" element= {<Mais />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
