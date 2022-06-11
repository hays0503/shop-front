import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import DropdownOnHoverMenu from '../DropdownOnHover/DropdownOnHoverMenu'
import Tree from 'react-animated-tree-v2'

function HoverControlledDropdown(props) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <NavDropdown
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setTimeout(setIsHovered, 1000, false)}
      onToggle={() => setIsClicked(!isClicked)}
      show={isClicked || isHovered}
    />
  )
}

class CategoriesBar extends React.PureComponent {
  MouseEnter() {
    this.setState({ show: true })
  }
  MouseLeave() {
    this.setState({ show: false })
  }

  treeStyles = {
    color: 'white',
    fill: 'white',
    width: '100%',
    zIndex: 1000,
    overflow: 'visible'
  }

  typeStyles = {
    fontSize: '2em',
    verticalAlign: 'middle'
  }

  render() {
    return (
      <div>
        <Nav>
          <Tree content="Категории" type="Продукты" canHide open style={this.treeStyles}>
            <DropdownOnHoverMenu key="end" id="dropdown-button-drop-end" drop="end" />
          </Tree>

          <Tree content="Категории" type="Продукты" canHide open style={this.treeStyles}>
            <DropdownOnHoverMenu key="end" id="dropdown-button-drop-end" drop="end" />
            <Tree content="Книги" canHide style={this.treeStyles}>
              <DropdownOnHoverMenu key="end" id="dropdown-button-drop-end" drop="end" />
            </Tree>
            <Tree content="Игрушки" canHide>
              <Tree content="Мягкие" />
              <Tree content="Развивающие">
                <Tree content="от 3 лет" style={{ color: '#77eb67' }} />
                <Tree content="от 5 лет" style={{ color: '#77eb67' }} />
                <Tree content="от 8 лет" style={{ color: '#77eb67' }} />
              </Tree>
              <Tree content="Настольные" />
            </Tree>
            <Tree content="Велосипеды" canHide />
            <Tree content="Самокаты" canHide />
          </Tree>
        </Nav>
      </div>
    )
  }
}

export default CategoriesBar
