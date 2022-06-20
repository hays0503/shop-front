import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const itemShop = [
  {
    idItem: 1,
    title: 'lorem',
    description: 'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125000000,
    rating: 1,
    image: 'https://via.placeholder.com/600/92c952'
  },
  {
    idItem: 2,
    title: 'lorem',
    description: 'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125000000,
    rating: 2,
    image: 'https://via.placeholder.com/600/92c952'
  },
  {
    idItem: 3,
    title: 'lorem',
    description: 'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125000000,
    rating: 3,
    image: 'https://via.placeholder.com/600/92c952'
  },
  {
    idItem: 4,
    title: 'lorem',
    description: 'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125000000,
    rating: 4,
    image: 'https://via.placeholder.com/600/92c952'
  },
  {
    idItem: 5,
    title: 'lorem',
    description: 'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125000000,
    rating: 5,
    image: 'https://via.placeholder.com/600/92c952'
  },
  {
    idItem: 6,
    title: 'lorem',
    description: 'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125000000,
    rating: 1,
    image: 'https://via.placeholder.com/600/92c952'
  },
  {
    idItem: 7,
    title: 'lorem',
    description: 'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125000000,
    rating: 2,
    image: 'https://via.placeholder.com/600/92c952'
  },
  {
    idItem: 8,
    title: 'lorem',
    description: 'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125000000,
    rating: 3,
    image: 'https://via.placeholder.com/600/92c952'
  },
  {
    idItem: 9,
    title: 'lorem',
    description: 'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125000000,
    rating: 4,
    image: 'https://via.placeholder.com/600/92c952'
  }
]

export default class ShopWindow extends Component {
  render() {
    return (
      <CardGroup>
        <Row style={{ margin: '2rem' }} xs={1} md={2} lg={3} xl={4} xxl={5}>
          {this.renderShopWindow()}
        </Row>
      </CardGroup>
    )
  }

  renderRating(star) {
    switch (star) {
      case 5:
        return (
          <div style={{ fontSize: '1rem', color: 'rgb(255, 215, 0)' }}>
            <i className="bi bi-star-fill img-fluid" />
            <i className="bi bi-star-fill img-fluid" />
            <i className="bi bi-star-fill img-fluid" />
            <i className="bi bi-star-fill img-fluid" />
            <i className="bi bi-star-fill img-fluid" />
          </div>
        )
      case 4:
        return (
          <div style={{ fontSize: '1rem', color: 'rgb(255, 215, 0)' }}>
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star" />
          </div>
        )
      case 3:
        return (
          <div style={{ fontSize: '1rem', color: 'rgb(255, 215, 0)' }}>
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
          </div>
        )
      case 2:
        return (
          <div style={{ fontSize: '1rem', color: 'rgb(255, 215, 0)' }}>
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
          </div>
        )
      case 1:
        return (
          <span style={{ fontSize: '1rem', color: 'rgb(255, 215, 0)' }}>
            <i className="bi bi-star-fill" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
          </span>
        )
      case 0:
        return (
          <span style={{ fontSize: '1rem', color: 'rgb(255, 215, 0)' }}>
            <i className="bi bi-star" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
          </span>
        )
      default:
        return null
    }
  }

  renderShopWindow() {
    return itemShop.map(item => {
      return (
        <Col style={{ marginBottom: '0.5rem' }} key={item.idItem}>
          <Card>
            <Card.Img
              variant="top"
              src={item.image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'scale-down'
              }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Row style={{ margin:'5px' }}>
                <Col style={{ padding:'5px' }} className="col">
                  Рейтинг: {item.rating}/5
                </Col>
                <Col style={{ padding:'5px' }} className="col text-center">
                  {this.renderRating(item.rating)}
                </Col>
              </Row>
              <Row>
                <Col  className="col">
                  <i className="bi bi-currency-dollar" />
                  {item.cost}
                </Col>
                <Col className="col-6">
                  <Button>
                    Купить <i class="bi bi-cart4"></i>
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }
}
