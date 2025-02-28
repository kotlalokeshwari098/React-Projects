import '../App.css';

export default function Entry(props) {
    console.log(props)
    return (
        <main>
            <div className="left-main">
                <img src={props.item.img.src} alt={props.item.img.alt} />
            </div>
            <div className="right-main">
                <div className="main-location">
                <div className="location-details">
                    <span class="material-symbols-outlined">
                        location_on
                    </span>
                    <span>{props.item.country}</span>
                    <a href={props.item.googleMapsLink}>View on Google Maps</a>
                </div>
                <div className="heading">
                    <h2>{props.item.title}</h2>
                </div>
                </div>
                
                <div className="date-details">
                    <b>{props.item.date}</b>
                </div>
                <div className="about-it">
                {props.item.text}
                </div>
            </div>
        </main>
    )
}
