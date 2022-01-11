import PostForm from './PostForm/PostForm'
import ImageCard from './ImageCard/ImageCard'
import SearchForm from '../components/SearchForm/SearchForm'
import "../components/Main.css"

function Main(props) {

    const {filteredPosts, likeImage, addPost, setSearchItem, addComment} = props
    
    return (

        <section className="image-container">

            <SearchForm 
                setSearchItem = {setSearchItem}
            />

            <PostForm 
                addPost = {addPost}
            />

            <div className='article-wrapper'>

                {filteredPosts.map(post => 

                    <ImageCard 
                        key = {post.id}
                        post = {post}

                        likeImage = {likeImage}
                        addComment = {addComment}
                    />
                    
                )}

            </div>
            
        </section>

    )

}

export default Main