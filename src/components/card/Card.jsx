import video1 from '../../assets/videos/video1.mp4'
import video2 from '../../assets/videos/video2.mp4'
import './Card.css'

function Card(props) {

    return(
        <>
        <div className="card">
            <video controls src={props.video}></video>
            <p className="title">{props.title}</p>
            <p className="subtitle">{props.subtitle}</p>
            <p className="uploadDate">{props.date}</p>
            <a href="#"><button>Learn More</button></a>
        </div>
        </>
    )
}

export default Card