import '../App.css';

export default function Dies(prop){
    return(
        <button style={{ backgroundColor: prop.isHeld ? "#59E391" : "red" }}
        aria-pressed={prop.isHeld}
        aria-label={`Die with value ${prop.value} , ${prop.isHeld ? "held" : "not held"}`} 
        onClick={prop.holds} >{prop.value}
        </button>
    )
}