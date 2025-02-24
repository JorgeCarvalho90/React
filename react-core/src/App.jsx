import { Link } from "react-router"

function App() {
  const items = [{to:"/bem-vindo", name:"Bem Vindo"},
    {to:"/contador", name:"Contador"},
    {to:"/lista-items", name:"Lista Items"},
    {to:"/listar-posts", name:"Listar Postos"},
    {to:"/relogio", name:"Relogio"},
    {to:"/relogio-funcional", name:"Relogio Funcional"},
    {to:"/saudacao", name:"Saudação"},
    {to:"/formulario", name:"Formulario"},
    {to:"/lista-tarefas", name:"Lista Tarefas"}
  ]
  return (
    <div>
      <ul>
        {items.map((value,key) =>(
          <li key={`Pag-${key}`}>
            <Link to={value.to}>{value.name}</Link>
          </li> 
        ))}
      </ul>
    </div>
  )
}

export default App