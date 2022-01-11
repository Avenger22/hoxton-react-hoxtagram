import PostForm from './PostForm/PostForm'
import ArticleWrapperImages from './ImageCard/ArticleWrapperImages'
import SearchForm from '../components/SearchForm/SearchForm'
import "../components/Main.css"

function Main(props) {

    const {filteredPosts, likeImage, addPost, setSearchItem, 
        addComment, deleteComment, deletePost} = props
    
    return (

        <section className="image-container">

            <SearchForm 
                setSearchItem = {setSearchItem}
            />

            <PostForm 
                addPost = {addPost}
            />

            <ArticleWrapperImages 
                filteredPosts = {filteredPosts}
                likeImage = {likeImage}
                addComment = {addComment}

                deleteComment = {deleteComment}
                deletePost = {deletePost}
            />

            {/* <div className='article-wrapper'>

                {filteredPosts.map(post => 

                    <ImageCard 
                        key = {post.id}
                        post = {post}

                        likeImage = {likeImage}
                        addComment = {addComment}

                        deleteComment = {deleteComment}
                        deletePost = {deletePost}
                    />
                    
                )}

            </div> */}
            
        </section>

    )

}

export default Main