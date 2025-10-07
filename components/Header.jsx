import Globe from './../images/globe.png';
export default function Header(){
    return(
        <div className="header">
            <img src={Globe} alt="no image" />
            <h1>My Travel Journal</h1>
        </div>
    )
}