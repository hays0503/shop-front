import './App.css'
import Container from 'react-bootstrap/Container'
// import RegistrationForm from './RegistrationForm/Reg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShopWindow from './ShopWindow/ShopWindow'
import NavigationBar from './NavigarionBar/NavigationBar'
import Categories from './CategoriesBar/CategoriesBar'
import ItemViewer from './ItemViewer/ItemViewer'
import React, { useState } from 'react'

function App() {
  const [isShowCategories, setShowCategories] = useState(false)

  const toggleShowCategories = () => {
    setShowCategories(!isShowCategories)
  }

  return (
    <div className="App">
      <Container fluid>
        <NavigationBar handleShowCategories={toggleShowCategories} />

        <Row>
          {isShowCategories ? (
            <Col className="col-2">
              <Categories />
            </Col>
          ) : null}
          <Col className="col">
            <ItemViewer style={{ zIndex: 0 }} />
            {/* <ShopWindow /> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default App
