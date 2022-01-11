import Comment from './Comment'
import "../ImageCard/Comments.css"

function Comments(props) {
    
    const {postComments, addComment, post, deleteComment} = props
    
    return (

        <ul className="comments">
            
            <form 
                className='comment-add-form'
                onSubmit={e => {
                    e.preventDefault()
                    const comment = e.target.addComment.value

                    console.log(comment)
                    // addComment(comment, post.id, post)
                }}
            >

                <input
                    type = 'text'
                    name = 'addComment'
                    placeholder ='add a comment'
                />

            </form>

            {postComments.map(comment => 
                
                <Comment 
                    key = {`post with id: ${comment.id}`}
                    deleteComment = {deleteComment}
                    comment = {comment}
                />
                
            )}

        </ul>

    )

}

export default Comments