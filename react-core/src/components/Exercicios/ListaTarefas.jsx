import { useState } from "react"

export default function Tarefas (){
   
    const [tarefa, setTarefa]= useState('')
    const [tarefaList, setTarefaList] = useState([])

    // const 
    return(
        <>
            <h1>Lista de tarefas</h1>

            <form onSubmit={(e)=>{
                e.preventDefault()
                // console.log("Tarefa adicionada", tarefa)
                setTarefaList([tarefa,...tarefaList])
                setTarefa("")
                
            }}>
                <div className="addTarefaContainer">
                <label htmlFor="label">Tarefa:</label>
                <input placeholder ="adicionar tarefa" type="text" name="nome" value={tarefa} onChange={(e)=>{
                    setTarefa(e.target.value)

                }}/>
                <button className="addTarefa">Adicionar</button>
                </div>
            </form>
            
            <div className="tarefasContainer">
            <ul className="tarefasList">
                {tarefaList.map((item, key)=> (
                    <li key={`todo-item-${key}`}>
                        {item}<button onClick={()=>{
                            const filteredList = tarefaList.filter((_, tarefaKey) => key !== tarefaKey)
                            setTarefaList(filteredList)
                        }}>Remover</button>
                    </li>
                ))}

            </ul>
            </div>
 


        </>
    )
}