import ImageCard from './ImageCard'

function ArticleWrapperImages(props) {

    const {setPosts, filteredPosts, likeImage, addComment, deleteComment, deletePost} = props  

    return (

        <div className='article-wrapper'>

            {filteredPosts.map(post => 

                <ImageCard 
                    key = {post.id}
                    setPosts = {setPosts}
                    
                    filteredPosts = {filteredPosts}
                    post = {post}

                    likeImage = {likeImage}
                    addComment = {addComment}

                    deleteComment = {deleteComment}
                    deletePost = {deletePost}
                />
                
            )}

        </div>

    )

}

export default ArticleWrapperImages