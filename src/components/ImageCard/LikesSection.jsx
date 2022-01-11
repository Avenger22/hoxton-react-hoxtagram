import "../ImageCard/LikesSection.css"

function LikesSection(props) {

    const {postLikes, likeImage, post} = props 

    return (

        <div className="likes-section">

            <span className="likes">{postLikes}</span>
            <button className="like-button"
            onClick={function () {
                likeImage(post)
            }}>
                ♥
            </button>

        </div>

    )

}

export default LikesSection