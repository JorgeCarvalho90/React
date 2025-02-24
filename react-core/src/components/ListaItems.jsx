export default function ListaItems(props){
    return(
      <>
        <h3>Lista de items</h3>
        <ul>
          {props.items.map((items, key) => (
            <li key={key}>{items}</li>
          ))}
        </ul>
      </>
    )
  
  }