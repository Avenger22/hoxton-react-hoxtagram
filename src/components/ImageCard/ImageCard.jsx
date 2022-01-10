import ImageCardTitle from '../ImageCard/ImageCardTitle'
import ImageCardImg from './ImageCardImg'
import LikesSection from './LikesSection'
import Comments from './Comments'

function ImageCard(props) {

    const {post} = props  

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
            />

            <Comments 
                postComments = {post.comments}
            />

        </article>

    )

}

export default ImageCard