import Comment from './Comment'
import "../ImageCard/Comments.css"

function Comments(props) {
    
    const {filteredPosts, setPosts, postComments, post, deleteComment} = props
    
    function addComment(imageIdParam, contentParam) {

        return fetch(`http://localhost:8000/comments`, {
          
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
    
          body: JSON.stringify({ content: contentParam, imageId: imageIdParam })
    
        }).then(res => res.json())
    
    }
    
    return (

        <ul className="comments">
            
            <form 
                className='comment-add-form'
                
                onSubmit={e => {

                    e.preventDefault()
                    const commentContent = e.target.addComment.value

                    console.log(commentContent)

                    addComment(post.id, commentContent).then(res => {
                        const updatedPosts = [...filteredPosts];
                        let index = updatedPosts.findIndex(item => item.id === post.id)
                        
                        updatedPosts[index].comments.push(res)
                        setPosts(updatedPosts)
                    });

                    e.target.reset();
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
                    addComment = {addComment}
                    post = {post}
                />
                
            )}

        </ul>

    )

}

export default Comments