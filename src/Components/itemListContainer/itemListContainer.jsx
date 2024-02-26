import "./itemListContainer.css"
export const ItemListContainer = (props) => {
    console.log(props)
    return <div className="saludos">
        <h1>{props.greeting}</h1>
        <h2>{props.saludo2}</h2>
    </div>
}