import '../App.css'

export default function Card(prop){
    return(
        <button className={prop.isHidden? 'showCard  card-container' : "hiddenCard  card-container"}
        style={{backgroundColor:prop.isHidden ? 'black':'white'}}
        onClick={prop.showCard}>
               {prop.value}
        </button>
    )
}