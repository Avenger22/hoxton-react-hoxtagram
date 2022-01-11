function RemoveImage(props) {

    const {deletePost, post} = props 

    return (

        <div className='article-remove'>

            <button onClick={function() {
                deletePost(post)
            }}>
                X
            </button>

        </div>
    
    )

}

export default RemoveImage