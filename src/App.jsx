// #region 'Importing'
import { useEffect, useState } from 'react'

import '../src/App.css'

import Main from './components/Main'
import ImageLogo from './components/ImageLogo'
// #endregion

function App () {

  // #region 'State Object'
  const [posts, setPosts] = useState([]) //we let it void because we need to fetch it form server JSON file
  // #endregion


  // #region 'Server Functions'
  useEffect(() => {
    fetch('http://localhost:8000/images')
      .then(resp => resp.json())
      .then(postsFromServer => setPosts(postsFromServer)) //we update the state then react rerenders auto
  }, [])
  // #endregion


  // #region 'APP control and conditional flow'
  let filteredPosts = posts

  function likeImage(post) {

    // update the server
    fetch(`http://localhost:8000/images/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: post.likes + 1 })
    })

    // update state
    const updatedPost = JSON.parse(JSON.stringify(filteredPosts))
    const match = updatedPost.find(target => target.id === post.id)

    match.likes++
    setPosts(updatedPost)
  }

  function addPost(formTitle, formImage, formLikes, formComment) {

    const newPost = {
      title: formTitle,
      image: formImage,
      likes: formLikes,
      comments: [formComment]
    }
    
    fetch('http://localhost:8000/images', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(newPost)
    })
    .then(responseItem => responseItem.json())
    .then(responseJsonArray => {

      // response will contain the new item with the ID
      const updatedPosts = [...posts, responseJsonArray]
      setPosts(updatedPosts)

    })

  }
  // #endregion


  //#region 'Returning HTML of the APP'
  return (

    <div className='app'>

      <ImageLogo />

      <Main 
        filteredPosts = {filteredPosts}
        likeImage = {likeImage}
        addPost = {addPost}
      />
      
    </div>

  )
  // #endregion

}

export default App