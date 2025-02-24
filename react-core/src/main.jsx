import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import BemvindoPage from './pages/BemVindo/index.jsx'
import ContadorPage from './pages/Contador/index.jsx'
import ListaItemsPage from './pages/ListaItems/index.jsx'
import ListarPostsPage from './pages/ListarPosts/index.jsx'
import RelogioPage from './pages/Relogio/index.jsx'
import RelogioFuncionalPage from './pages/RelogioFuncional/index.jsx'
import SaudacaoPage from './pages/Saudacao/index.jsx'
import FormularioPage from './pages/Formulario/index.jsx'
import ListaTarefasPage from './pages/ListaTarefas/index.jsx'
import Layout from './components/Layout/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<App/>} />
          <Route path="/bem-vindo" element={<BemvindoPage/>} />
          <Route path="/contador" element={<ContadorPage/>} />
          <Route path="/lista-items" element={<ListaItemsPage/>} />
          <Route path="/listar-posts" element={<ListarPostsPage/>} />
          <Route path="/relogio" element={<RelogioPage/>} />
          <Route path="/relogio-funcional" element={<RelogioFuncionalPage/>} />
          <Route path="/saudacao" element={<SaudacaoPage/>} />
          <Route path="/formulario" element={<FormularioPage/>} />
          <Route path="/lista-tarefas" element={<ListaTarefasPage/>} />
          <Route path="*" element={<h1>404 Page not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
