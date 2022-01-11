import "../ImageCard/Comment.css"
import "../ImageCard/Comments.css"

function Comment(props) {

    const {content} = props

    return (

        <li>
            
            {content}

            <button>
                X
            </button>
        
        </li>

    )

}

export default Comment