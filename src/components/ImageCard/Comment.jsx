import "../ImageCard/Comment.css"
import "../ImageCard/Comments.css"

function Comment(props) {

    const  {post,deleteComment, comment} = props

    return (

        <li>

            {comment.content}

            <button onClick={function() {
                deleteComment(comment)
            }}>
                X
            </button>
        
        </li>

    )

}

export default Comment