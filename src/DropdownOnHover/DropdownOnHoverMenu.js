import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

/**
 * 1)Root
 * 1.1)subRoot
 *  1.1.1)childrenElements
 *  1.1.1)childrenElements
 * 1.2)subRoot
 *  1.2.1)childrenElements
 *  1.2.2)childrenElements
 */

class categoriesItem {
  _Title = 'placeholder'

  rootElement
  childrenElements
  isOpen = false
  isHover = false

  constructor(rootElement, childrenElements) {
    this.rootElement = rootElement
    this.childrenElements = childrenElements
  }

  get Title() {
    return this._Title
  }
  set Title(value) {
    this._Title = value
  }

  openItem() {
    this.isOpen = true
  }

  closeItem() {
    this.isOpen = false
  }

  isSelectedItem() {
    this.rootElement?.isSelectedItem()
    this.closeItem()
  }
}

let item1 = new categoriesItem()
item1.Title = 'Var 1'
let item2 = new categoriesItem()
item2.Title = 'Var 2'
let itemShop = new categoriesItem([item1, item1], [item2, item2])

class DropdownOnHoverMenu extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false, categories: [] }
    this.MouseEnter = this.MouseEnter.bind(this)
    this.MouseLeave = this.MouseLeave.bind(this)
    console.log('rootElement', itemShop.rootElement)
    console.log('childrenElements', itemShop.childrenElements)
  }

  MouseEnter() {
    this.setState({ show: true })
  }
  MouseLeave() {
    this.setState({ show: false })
  }
  state = { stateShow: false }
  render() {
    return (
      <Dropdown
        {...this.props}
        title="Dropdown"
        id="collasible-nav-dropdown"
        show={this.state.show}
        onMouseEnter={this.MouseEnter}
        onMouseLeave={this.MouseLeave}
      >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default DropdownOnHoverMenu
