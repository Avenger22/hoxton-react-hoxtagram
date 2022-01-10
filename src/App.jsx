// #region 'Importing'
import { useState } from 'react'

import '../src/App.css'

import Main from './components/Main'
import ImageLogo from './components/ImageLogo'
// #endregion

function App () {

  return (

    <div className='app'>

      <ImageLogo />
      <Main />
      
    </div>

  )

}

export default App