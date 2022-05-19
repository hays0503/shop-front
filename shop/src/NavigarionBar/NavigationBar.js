import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import iconTitle from './1.png'
import './NavigationBar.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>
            <Row className='justify-content-md-center'>
              <Col xm={2} sm={2} xs={2}>
                <img
                  alt=''
                  src={iconTitle}
                  width='45'
                  height='45'
                  className='d-inline-block align-top'
                />
              </Col>
              <Col xm={2} sm={2} xs={2}>
                <Row>
                  <Col>
                    <text className='title'>Рога и копыта</text>
                  </Col>
                  <Col>
                    <i className='bi bi-list'></i>
                    <text className='title'>&nbsp;Категории</text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#features'>Features</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
              <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='outline-success'>Search</Button>
              </Form>
              <div className='vr'>&nbsp;</div>
              <Navbar.Text>
                Signed in as: <a href='#login'>Mark Otto</a>
              </Navbar.Text>
              <div className='vr'>&nbsp;</div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar
