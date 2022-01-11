// #region 'Importing'
import { useEffect, useState } from 'react'

import '../src/App.css'

import Main from './components/Main'
import ImageLogo from './components/ImageLogo'
// #endregion

function App () {

  // #region 'State Object'
  const [posts, setPosts] = useState([]) //we let it void because we need to fetch it form server JSON file
  const [searchItem, setSearchItem] = useState('')
  // #endregion


  // #region 'Server Functions'
  function getPostsFromServer() {

    fetch('http://localhost:8000/images')
      .then(resp => resp.json())
      .then(postsFromServer => setPosts(postsFromServer)) //we update the state then react rerenders auto

  }

  useEffect(getPostsFromServer, [])

  function newPostInServer(newPost) {

    return fetch('http://localhost:8000/images', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newPost)
      })

      .then(responseItem => responseItem.json())

  }

  function likeImageOnServer(post) {

    // update the server
    fetch(`http://localhost:8000/images/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: post.likes + 1 })
    })

  }

  function deletePostFromServer(postId) {

    fetch(`http://localhost:8000/images/${postId}`, {
      method: "DELETE"
    });

  }

  // function addCommentFromServer(imageIdParam, contentParam) {

  //   return fetch(`http://localhost:8000/comments`, {
      
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },

  //       body: JSON.stringify({ content: contentParam, imageId: imageIdParam })

  //   }

  // )}

  function deleteCommentFromServer(comment) {
    
    fetch(`http://localhost:8000/comments/${comment.id}`, {
      method: 'DELETE'
    })

  }
  // #endregion


  // #region 'Helper Functions'
  function likeImage(post) {

    likeImageOnServer(post)

    // update state
    const updatedPost = JSON.parse(JSON.stringify(filteredPosts))
    const match = updatedPost.find(target => target.id === post.id)

    match.likes++
    setPosts(updatedPost)

  }


  function addPost(formTitle, formImage, formLikes) {

    const newPost = {
      title: formTitle,
      image: formImage,
      likes: formLikes,
      comments: []
    }
    
    newPostInServer(newPost).then(responseJsonArray => {

      const updatedPosts = [...posts, responseJsonArray]
      setPosts(updatedPosts)

    })

  }

  function deletePost(post) {

    deletePostFromServer(post)

    let updatedPosts = JSON.parse(JSON.stringify(posts));

    updatedPosts = updatedPosts.filter(post => post.id !== post.id)
    setPosts(updatedPosts);

  }

  function searchPosts(filteredPosts) {

    return filteredPosts.filter(post =>
      post.title.toLowerCase().includes(searchItem.toLowerCase())
    )

  }


  // function addComment(imageIdParam, contentParam, post) {

  //   const newComment = {

  //     comments: [
  //       {
  //         imageId: imageIdParam,
  //         content: contentParam
  //       }
  //     ]

  //   }
    
  //   fetch(`http://localhost:8000/comments/`, {
  //       method: 'POST',
  //       headers: {
  //       'Content-Type': 'application/json'
  //     },

  //     body: JSON.stringify(newComment)
  //   })

  //   .then(responseItem => responseItem.json())
  //   .then(responseJsonArray => {

  //     // response will contain the new item with the ID
  //     const updatedComments = [...post.comments, responseJsonArray]
  //     setPosts(updatedComments)

  //   })

  // }

  
  function addComment(imageIdParam, contentParam) {

    return fetch(`http://localhost:8000/comments`, {
      
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },

      body: JSON.stringify({ content: contentParam, imageId: imageIdParam })

    }) 

  }

  function deleteComment(comment) {

    deleteCommentFromServer(comment) //delete from the server

    //delete from the state and APP
    let updatedPosts = JSON.parse(JSON.stringify(posts));
    let findingIndex = updatedPosts.findIndex(target => target.id === comment.imageId)

    let updatedComments = updatedPosts[findingIndex].comments.filter(target => target.id !== comment.id);

    updatedPosts[findingIndex].comments = updatedComments;
    setPosts(updatedPosts);

  }
  // #endregion


  // #region 'App Conditionals'
  let filteredPosts = posts

  if (searchItem !== '') {
    filteredPosts = searchPosts(filteredPosts)
  }
  // #endregion


  //#region 'Returning HTML of the APP'
  return (

    <div className='app'>

      <ImageLogo />

      <Main 
        setPosts = {setPosts}
        filteredPosts = {filteredPosts}
        likeImage = {likeImage}
        
        addPost = {addPost}
        setSearchItem = {setSearchItem}

        addComment = {addComment}
        deleteComment = {deleteComment}
        deletePost = {deletePost}
      />
      
    </div>

  )
  // #endregion

}

export default App