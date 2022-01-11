import ImageCardTitle from '../ImageCard/ImageCardTitle'
import ImageCardImg from './ImageCardImg'
import LikesSection from './LikesSection'
import Comments from './Comments'
import RemoveImage from './RemoveImage'
import "../ImageCard/ImageCard.css"

function ImageCard(props) {

    const {setPosts, post, likeImage, filteredPosts, deleteComment, deletePost} = props  

    return (

        <article className="image-card">

            <RemoveImage 
                deletePost = {deletePost}
                post = {post}
            />

            <ImageCardTitle 
                postTitle = {post.title}
            />

            <ImageCardImg 
                postImage = {post.image}
            />

            <LikesSection 
                postLikes = {post.likes}
                likeImage = {likeImage}
                post = {post}
            />

            <Comments 
                setPosts = {setPosts}
                filteredPosts = {filteredPosts}
                
                postComments = {post.comments}
                post = {post}
                deleteComment = {deleteComment}
            />

        </article>

    )

}

export default ImageCard