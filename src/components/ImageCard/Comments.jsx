import Comment from './Comment'

function Comments(props) {
    
    const {postComments} = props
    
    return (

        <ul className="comments">
            
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