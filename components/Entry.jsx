import Location from './../images/location.png';
export default function Entry(props){
    return (
        <main>
            {/* while passing entry properties like entry = {entry} in Entry.jsx file we have to add extra lines to correctly access i.e props.entry.img.src */}
            {/* while copying using spread operator ...entry in Entry.jsx file we can write as it is */}


            <article className="journal-entry">
                <div className="main-image-container">
                    <img src={props.img.src} alt={props.img.alt} className="main-image" />
                </div>

                <div className="info-container">
                    <img src={Location} alt="no image" className="marker" />
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapLinks}>View on google map</a>
                    <h2 className="entry-title">{props.title}</h2>
                    <p className="trip-dates">{props.dates}</p>
                    <p className="entry-text">{props.text}</p>
                </div>
            </article>
        </main>
    )
}