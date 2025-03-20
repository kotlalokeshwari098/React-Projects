import '../App.css';

export default function NavBar(){
    return(
        <div className="nav-container">
            <div className="nav-logo">
                <img src="https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo=" alt="" />
            </div>
            <div className="nav-links">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Movie List</a></li>
                        <li><a href="">Favourites</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>       
                    </ul>
            </div>
            <div className="nav-profile">
                <img src="https://img.freepik.com/premium-vector/een-man-met-een-paars-hemd-en-een-blauw-hemd-met-een-paarse-kraag_969863-208745.jpg?semt=ais_hybrid" alt="" />
            </div>
        </div>
    )
}