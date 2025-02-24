import ListaItems from "../../components/ListaItems"

export default function ListaItemsPage(){
    const frutas = ["Maçã","Pêra","Banana"]

    return(
    <div>
        <h1>Componente ListaItems.jsx </h1>
            <ListaItems items={frutas}/>
    </div>)

}