import "../ImageCard/Comment.css"
import "../ImageCard/Comments.css"

function Comment(props) {

    const {content} = props

    return (

        <li>{content}</li>

    )

}

export default Comment