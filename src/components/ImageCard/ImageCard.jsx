import ImageCardTitle from '../ImageCard/ImageCardTitle'
import ImageCardImg from './ImageCardImg'
import LikesSection from './LikesSection'
import Comments from './Comments'
import "../ImageCard/ImageCard.css"

function ImageCard(props) {

    const {post, likeImage, addComment} = props  

    return (

        <article className="image-card">

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
                postComments = {post.comments}
                addComment = {addComment}
                post = {post}
            />

        </article>

    )

}

export default ImageCard