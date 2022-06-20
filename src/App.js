import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import ShopWindow from './ShopWindow/ShopWindow'
import NavigationBar from './NavigarionBar/NavigationBar'
import Categories from './CategoriesBar/CategoriesBar'
import ItemViewer from './ItemViewer/ItemViewer'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const [isShowCategories, setShowCategories] = useState(false)

  const toggleShowCategories = () => {
    setShowCategories(!isShowCategories)
  }

  return (
    <div className="App">
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        <Container fluid>
          
          <Row className="bg-dark ">
            <NavigationBar handleShowCategories={toggleShowCategories} />
          </Row>
          <Row className="bg-dark ">
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
        </Container></ThemeProvider>
      
    </div>
  )
}
export default App
