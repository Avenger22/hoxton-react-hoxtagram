import "../PostForm/PostForm.css"

function PostForm() {

    return (

        <div className="post-form">

            <h3 className="post-form-header">New Post</h3>

            <form className="post-form-el">

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