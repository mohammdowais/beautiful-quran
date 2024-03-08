import { useEffect, useState } from 'react'
import './App.css'
import Ayah from './Components/Ayah/Ayah'
import MainBody from './Components/Wrappers/MainBody'
import axios from 'axios'

function App() {
  return (
    <MainBody>
      <Ayah/>
    </MainBody>
  )
}

export default App
