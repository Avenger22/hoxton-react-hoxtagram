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