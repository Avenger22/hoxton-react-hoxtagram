import PostForm from './PostForm/PostForm'
import ImageCard from './ImageCard/ImageCard'
import "../components/Main.css"

function Main(props) {

    const {filteredPosts} = props
    
    return (

        <section className="image-container">

            <PostForm />

            <div className='article-wrapper'>

                {filteredPosts.map(post => 

                    <ImageCard 
                        key = {post.id}
                        post = {post}
                    />
                    
                )}

            </div>
            
        </section>

    )

}

export default Main