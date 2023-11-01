import Header from "./components/Header"
import Meme from "./components/Meme"
import {useState} from 'react'
function App() {

  return (
    <>
    { screen.width > 500 && 
    < marquee behavior="" direction="" scrollamount="15">
    <b>Made for mobile - watch in mobile screen</b>
    </marquee>}


      <Header />
      <Meme />
    </>
  )
}

export default App
