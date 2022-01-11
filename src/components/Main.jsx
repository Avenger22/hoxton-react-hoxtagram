import PostForm from './PostForm/PostForm'
import ArticleWrapperImages from './ImageCard/ArticleWrapperImages'
import SearchForm from '../components/SearchForm/SearchForm'
import "../components/Main.css"

function Main(props) {

    const {setPosts, filteredPosts, likeImage, addPost, setSearchItem, 
        deleteComment, deletePost} = props
    
    return (

        <section className="image-container">

            <SearchForm 
                setSearchItem = {setSearchItem}
            />

            <PostForm 
                addPost = {addPost}
            />

            <ArticleWrapperImages 
                setPosts = {setPosts}
                filteredPosts = {filteredPosts}
                
                likeImage = {likeImage}
                deleteComment = {deleteComment}
                deletePost = {deletePost}
            />

        </section>

    )

}

export default Main