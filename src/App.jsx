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

  function addCommentFromForm(formParam, formValueParam) { //removed formparam

    let objectCommentsAdd = {
        id: state.comments.length += 1,
        content: formValueParam,
        imageId: formParam.id
    }

    formParam.comments.push(objectCommentsAdd)
    // state.comments.push(objectCommentsAdd) 

    addCommentUpdateToServer(objectCommentsAdd) //this calls the function to update the server

  }

  function addItemFromFormToState(inputParam1, inputParam2, inputParam3, inputParam4) {

    // let idValue = state.images.length + 1
    let objectItemImages = {
        // id: state.images.length += 1,
        id: state.images.length + 1,
        title: inputParam1,
        likes: inputParam2,
        image: inputParam4,
        comments: [
            {
            id: state.comments.length += 1,
            content: inputParam3,
            imageId: state.images[state.images.length - 1].id + 1
            },
        ]
    }

    //variable pushed wich is the user form input new item
    state.images.push(objectItemImages)

    //we also push it to this array comments in the state object
    let objectItemComments = {
        id: state.comments.length += 1,
        content: inputParam3,
        imageId: state.images[state.images.length - 1].id + 1
    }

    // state.comments.push(objectItemComments)

    //updating the server
    addItemFromFormToServer(objectItemImages)

  }

  function addItemFromFormToServer(imagesObjectParam) {

    fetch('http://localhost:3000/images', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(imagesObjectParam)

    })

  }

  function addCommentUpdateToServer(commentsParam) {

    // for (const element of commentsArrayParam) {

        fetch('http://localhost:3000/comments', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(commentsParam)

        })

    // }

  }
  // #endregion


  //#region 'Returning HTML of the APP'
  return (

    <div className='app'>

      <ImageLogo />

      <Main 
        filteredPosts = {filteredPosts}
      />
      
    </div>

  )
  // #endregion

}

export default App