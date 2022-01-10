import ImageCardTitle from '../ImageCard/ImageCardTitle'
import ImageCardImg from './ImageCardImg'
import LikesSection from './LikesSection'
import Comments from './Comments'

function ImageCard() {

    return (

        <article className="image-card">

            <ImageCardTitle />
            <ImageCardImg />
            <LikesSection />
            <Comments />

        </article>

    )

}

export default ImageCard