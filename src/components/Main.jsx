import PostForm from './PostForm/PostForm'
import ImageCard from './ImageCard/ImageCard'
import "../components/Main.css"

function Main(props) {

    const {filteredPosts, likeImage, addPost} = props
    
    return (

        <section className="image-container">

            <PostForm 
                addPost = {addPost}
            />

            <div className='article-wrapper'>

                {filteredPosts.map(post => 

                    <ImageCard 
                        key = {post.id}
                        post = {post}
                        likeImage = {likeImage}
                    />
                    
                )}

            </div>
            
        </section>

    )

}

export default Main