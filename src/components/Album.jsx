import './Album.css'

const Album = (props) => {
    return (
        <div className='card'>
            <img src={'src/assets/' + props.albumCover}></img>
            <h3>{props.albumTitle}</h3>
            <a href={props.albumLink}>Go To Album!</a>
        </div>
    )
}

export default Album;