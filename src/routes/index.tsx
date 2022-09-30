import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from'../pages/Login'
import Cadastro from '../pages/Cadastro'
import Evento from '../pages/Evento'
import RegisterVoting from '../pages/RegisterVoting'
import ProgressVoting from '../pages/ProgressVoting'
import Vote from '../pages/Vote'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/evento" element={<Evento />} />
      <Route path="/registerVoting" element={<RegisterVoting />} />
      <Route path="/progressVoting" element={<ProgressVoting />} />
      <Route path="/vote" element={<Vote />} />
    </Routes>
  )
}
