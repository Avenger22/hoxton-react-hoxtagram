import "../ImageCard/ImageCardImg.css"

function ImageCardImg(props) {

    const {postImage} = props  

    return (

        <img src={postImage} className="image" />

    )

}

export default ImageCardImg