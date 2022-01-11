import Comment from './Comment'
import "../ImageCard/Comments.css"

function Comments(props) {
    
    const {postComments, addComment, post} = props
    
    return (

        <ul className="comments">
            
            <form 
                className='comment-add-form'
                onSubmit={e => {
                    e.preventDefault()
                    const comment = e.target.addComment.value

                    console.log(comment)
                    addComment(comment, post)
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
                    content = {comment.content}
                />
                
            )}

        </ul>

    )

}

export default Comments