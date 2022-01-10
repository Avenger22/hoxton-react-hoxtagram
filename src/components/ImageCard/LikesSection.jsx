import "../ImageCard/LikesSection.css"

function LikesSection(props) {

    const {postLikes} = props 

    return (

        <div className="likes-section">
            <span className="likes">{postLikes}</span>
            <button className="like-button">♥</button>
        </div>

    )

}

export default LikesSection