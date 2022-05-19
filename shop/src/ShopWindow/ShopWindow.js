import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const itemShop = [
  {
    idItem: 1,
    title: 'lorem',
    description:
      'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125,
    rating: 1,
    image:
      'https://sun2.beeline-kz.userapi.com/s/v1/ig2/mhwizBfxVaE-B9IldHcoKmrTmrRIVUTwmLd80tFFy3NVOBOZxsNx4uDuyA5jpcl-TvzriEjzuvNZxdX4ir0y0VJR.jpg?size=1003x1080&quality=96&type=album',
  },
  {
    idItem: 2,
    title: 'lorem',
    description:
      'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125,
    rating: 2,
    image:
      'https://sun9-14.userapi.com/s/v1/ig2/DdTVI4vMXinStZBHE8GPPR8jLyBxKLR6UX2XAFMdjLYJYPLsCf4n6aL7UQpIqalHoWh-tzteGSUS7rGRGUADPnd_.jpg?size=762x1080&quality=96&type=album',
  },
  {
    idItem: 3,
    title: 'lorem',
    description:
      'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125,
    rating: 3,
    image:
      'https://sun9-34.userapi.com/s/v1/ig2/rR6KWfB8LewMLFtolPxBPZFvSB1-iyr3agEuUelTJF4Lwg5vXXMyUeLji9V4jR67db9GVFbHeMzy-xd5qxyjDX07.jpg?size=807x1080&quality=96&type=album',
  },
  {
    idItem: 4,
    title: 'lorem',
    description:
      'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125,
    rating: 4,
    image:
      'https://sun9-12.userapi.com/s/v1/ig2/mCnLlDqCP9X5gPGOGNqNLrH8ePv7tMUP3zxgZ-BkwlIOAAB1raDgugg_qFwrhCEG-Z51sDY-NqIlt5tzAulPunRC.jpg?size=1280x1047&quality=96&type=album',
  },
  {
    idItem: 5,
    title: 'lorem',
    description:
      'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125,
    rating: 5,
    image:
      'https://sun9-65.userapi.com/s/v1/ig2/UscZAoAqA-CiTVPYEHjx_wx_siDYAoQri55F1Zyklue92lUYZiWcOZB2wT-5nQHD_GDjIvykTNtBqk2xEg4VB6bu.jpg?size=728x1080&quality=96&type=album',
  },
  {
    idItem: 1,
    title: 'lorem',
    description:
      'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125,
    rating: 1,
    image:
      'https://sun2.beeline-kz.userapi.com/s/v1/ig2/mhwizBfxVaE-B9IldHcoKmrTmrRIVUTwmLd80tFFy3NVOBOZxsNx4uDuyA5jpcl-TvzriEjzuvNZxdX4ir0y0VJR.jpg?size=1003x1080&quality=96&type=album',
  },
  {
    idItem: 2,
    title: 'lorem',
    description:
      'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125,
    rating: 2,
    image:
      'https://sun9-14.userapi.com/s/v1/ig2/DdTVI4vMXinStZBHE8GPPR8jLyBxKLR6UX2XAFMdjLYJYPLsCf4n6aL7UQpIqalHoWh-tzteGSUS7rGRGUADPnd_.jpg?size=762x1080&quality=96&type=album',
  },
  {
    idItem: 3,
    title: 'lorem',
    description:
      'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125,
    rating: 3,
    image:
      'https://sun9-34.userapi.com/s/v1/ig2/rR6KWfB8LewMLFtolPxBPZFvSB1-iyr3agEuUelTJF4Lwg5vXXMyUeLji9V4jR67db9GVFbHeMzy-xd5qxyjDX07.jpg?size=807x1080&quality=96&type=album',
  },
  {
    idItem: 4,
    title: 'lorem',
    description:
      'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
    cost: 125,
    rating: 4,
    image:
      'https://sun9-12.userapi.com/s/v1/ig2/mCnLlDqCP9X5gPGOGNqNLrH8ePv7tMUP3zxgZ-BkwlIOAAB1raDgugg_qFwrhCEG-Z51sDY-NqIlt5tzAulPunRC.jpg?size=1280x1047&quality=96&type=album',
  },
]

export default class ShopWindow extends Component {
  render() {
    return (
      <CardGroup>
        <Row xs={2} md={3} lg={5} xl={5} className='g-5'>
          {this.renderShopWindow()}
        </Row>
      </CardGroup>
    )
  }

  renderRating(star) {
    switch (star) {
      case 5:
        return (
          <div>
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
          </div>
        )
      case 4:
        return (
          <div>
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star' />
          </div>
        )
      case 3:
        return (
          <div>
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star' />
            <i className='bi bi-star' />
          </div>
        )
      case 2:
        return (
          <div>
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star' />
            <i className='bi bi-star' />
            <i className='bi bi-star' />
          </div>
        )
      case 1:
        return (
          <div>
            <i className='bi bi-star-fill' />
            <i className='bi bi-star' />
            <i className='bi bi-star' />
            <i className='bi bi-star' />
            <i className='bi bi-star' />
          </div>
        )
      case 0:
        return (
          <div>
            <i className='bi bi-star' />
            <i className='bi bi-star' />
            <i className='bi bi-star' />
            <i className='bi bi-star' />
            <i className='bi bi-star' />
          </div>
        )
    }
  }

  renderShopWindow() {
    return itemShop.map((item) => {
      return (
        <Col className='p-10' key={item.idItem}>
          <Card className='p-10' style={{ width: '16rem', height: '38rem' }}>
            <Card.Img
              variant='top'
              src={item.image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'scale-down',
              }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Row>
                <Col className='col-5 text-center'>
                  {this.renderRating(item.rating)}Rating: {item.rating}
                  /5
                </Col>
                <Col className='col'>
                  <i className='bi bi-currency-dollar' />
                  {item.cost}
                </Col>
                <Col>
                  <div className='col'>
                    <Button className='bi bi-cart-plus' variant='primary'>
                      Buy
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }
}
