import ImageCard from './ImageCard'

function ArticleWrapperImages(props) {

    const {setPosts, filteredPosts, likeImage, deleteComment, deletePost} = props  

    return (

        <div className='article-wrapper'>

            {filteredPosts.map(post => 

                <ImageCard 
                    key = {post.id}
                    setPosts = {setPosts}
                    
                    filteredPosts = {filteredPosts}
                    post = {post}

                    likeImage = {likeImage}
                    deleteComment = {deleteComment}
                    deletePost = {deletePost}
                />
                
            )}

        </div>

    )

}

export default ArticleWrapperImages