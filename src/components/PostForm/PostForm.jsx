import "../PostForm/PostForm.css"

function PostForm(props) {

    const {addPost} = props  

    return (

        <div className="post-form">

            <h3 className="post-form-header">New Post</h3>

            <form className="post-form-el" 
            onSubmit={function (e) {

                e.preventDefault()
                const formTitle = e.target.title.value
                const formLikes = e.target.likes.value
                const formImage = e.target.image.value
                const formComment = e.target.comment.value

                console.log(formTitle, formLikes, formImage, formComment)
                
                addPost(formTitle, formImage, formLikes, formComment)
                e.target.reset()
            }}>

                <input className="post-form-input input-1" name="title" required={true} type="text" placeholder="Add a title: "></input>
                <input className="post-form-input input-2" name="likes" required={true} type="text" placeholder="Add how many likes: "></input>
                <input className="post-form-input input-3" name="comment" required={true} type="text" placeholder="Add a comment: "></input>
                <input className="post-form-input input-4" name="image" required={true} type="text" placeholder="Add an image url: "></input>
                    
                <button className="post-form-btn">
                    Post
                </button>

            </form>

        </div>

    )

}

export default PostForm