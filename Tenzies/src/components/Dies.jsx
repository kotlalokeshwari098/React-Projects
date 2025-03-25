import '../App.css';

export default function Dies(prop){
    return(
        <button style={{ backgroundColor: prop.isHeld ? "#59E391" : "red" }} onClick={prop.holds} >{prop.value}
        </button>
    )
}