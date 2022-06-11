import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './NavigationBar.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import iconTitle from './1.png'

class NavigationBar extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect className="border-bottom while" expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Row>
              <Col xm={2} sm={2} xs={2}>
                <img alt="" src={iconTitle} width="45" height="45" className="d-inline-block align-top" />
              </Col>
              <Col xm={2} sm={2} xs={2}>
                <Row>
                  <Col className="title">Рога и копыта</Col>
                  <Col className="title">
                    <Button variant="dark" onClick={() => this.props.handleShowCategories()}>
                      <i className="bi bi-list" />
                      &nbsp;Категории
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav mr-auto">
            <Nav className="d-flex">
              <Form className="d-flex">
                <FormControl type="search" htmlSize={55} placeholder="Поиск" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Поиск</Button>
              </Form>
              <div className="vr">&nbsp;</div>
              <Navbar.Text>
                Вход как: <a href="#login">cthtufgbv@mail.ru</a>
              </Navbar.Text>
              <div className="vr">&nbsp;</div>
            </Nav>
            <Nav className="d-flex justify-content-end">
              <Form className="p-2 ml-auto">
                <Button variant="outline-success">
                  Корзина
                  <i className="bi bi-cart"></i>
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar
