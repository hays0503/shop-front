import './App.css'
import Container from 'react-bootstrap/Container'
// import RegistrationForm from './RegistrationForm/Reg'
import ShopWindow from './ShopWindow/ShopWindow'
import NavigationBar from './NavigarionBar/NavigationBar'

import React from 'react'

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <NavigationBar />
      <Container>
        <ShopWindow />
      </Container>
    </div>
  )
}
export default App
