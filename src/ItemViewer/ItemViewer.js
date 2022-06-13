import React, { useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// [Компьютеры и офис -> Компьютерные комплектующие -> Видеокарты] Строка с хлебными крошками для навигации
// [.....................] Описание лота (название)
// [.....................] Рейтинг (количество звёзд) Кол-во (заказов)
// [.....Картинка........] Цена в тг
// [.....................] [Блок описания..........................]
// [.....................] [.......................................]
// [.....................] [.......................................]

const itemShop = {
  idItem: 1,
  title: 'lorem',
  description: 'Esse id exercitation exercitation ad laborum enim non Lorem culpa.',
  cost: 125,
  rating: 1,
  image: [
    'https://sun9-north.userapi.com/sun9-83/s/v1/ig2/4_n5KDNSIuDnyDRA63GB3mzbRso_F9jEDTAPk-LU5KoDN-P3zGLns8LaHAZVD6OGPiEk9COgfLMdRJDIH2mxjenu.jpg?size=750x1080&quality=96&type=album',
    'https://sun9-east.userapi.com/sun9-36/s/v1/ig2/aTONHTTpfA2I7EBN-mobdQ35-fypKq50yG9Mzqho9x9yLdSOqEMwn_JN8CH4ATSKFEAC8_DcA7nvyerFe5dWsi6-.jpg?size=864x1080&quality=96&type=album',
    'https://sun9-east.userapi.com/sun9-28/s/v1/ig2/gEXesUCiN_9WYyAQV_3L8mgNjn-xz_wTZWT1tMZ6lSpTzYvHo4rDGSICpsjsKPZacKi_T_k38qobbCRU-vGnfHVC.jpg?size=772x1080&quality=96&type=album'
  ]
}

const activeBreadcrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="">Компьютеры и офис</Breadcrumb.Item>
      <Breadcrumb.Item href="">Компьютерные комплектующие</Breadcrumb.Item>
      <Breadcrumb.Item active>Видеокарты</Breadcrumb.Item>
    </Breadcrumb>
  )
}
const renderRating = star => {
  switch (star) {
    case 5:
      return (
        <span style={{ fontSize: '0.9rem', color: 'rgb(255,255,0)' }}>
          <i className="bi bi-star-fill img-fluid" />
          <i className="bi bi-star-fill img-fluid" />
          <i className="bi bi-star-fill img-fluid" />
          <i className="bi bi-star-fill img-fluid" />
          <i className="bi bi-star-fill img-fluid" />
        </span>
      )
    case 4:
      return (
        <span style={{ fontSize: '0.9rem', color: 'rgb(255,255,0)' }}>
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star" />
        </span>
      )
    case 3:
      return (
        <span style={{ fontSize: '0.9rem', color: 'rgb(255,255,0)' }}>
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star" />
          <i className="bi bi-star" />
        </span>
      )
    case 2:
      return (
        <span style={{ fontSize: '0.9rem', color: 'rgb(255,255,0)' }}>
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star" />
          <i className="bi bi-star" />
          <i className="bi bi-star" />
        </span>
      )
    case 1:
      return (
        <span style={{ fontSize: '0.9rem', color: 'rgb(255,255,0)' }}>
          <i className="bi bi-star-fill" />
          <i className="bi bi-star" />
          <i className="bi bi-star" />
          <i className="bi bi-star" />
          <i className="bi bi-star" />
        </span>
      )
    case 0:
      return (
        <span style={{ fontSize: '0.9rem', color: 'rgb(255,255,0)' }}>
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

const ItemViewer = () => {
  const [onSelectSlide, setOnSelectSlide] = useState(0)

  const onSelect = (activeIndex, e) => {
    console.log(activeIndex)
  }

  const activePic = setOnSelectSlide => {
    return (
      <>
        <Row className="justify-content-center" style={{ background: 'rgb(20, 25, 115)' }}>
          <Col md="auto" style={{ background: 'rgb(123, 25, 115)' }}>
            <Carousel fade indicators={false} activeIndex={onSelectSlide}>
              <Carousel.Item>
                <Image
                  thumbnail
                  style={{ width: '30rem', height: '30rem', objectFit: 'scale-down' }}
                  src={itemShop.image[0]}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  style={{ width: '30rem', height: '30rem', objectFit: 'scale-down' }}
                  src={itemShop.image[1]}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  style={{ width: '30rem', height: '30rem', objectFit: 'scale-down' }}
                  src={itemShop.image[2]}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{ background: 'rgb(20, 25, 115)' }}>
          <Col md="auto" style={{ background: 'rgb(123, 132, 115)' }}>
            <Image
              thumbnail
              style={{ width: '5rem', height: '5rem', objectFit: 'scale-down' }}
              src={itemShop.image[0]}
              alt="First slide"
              onClick={() => setOnSelectSlide(0)}
            />
            <Image
              thumbnail
              style={{ width: '5rem', height: '5rem', objectFit: 'scale-down' }}
              src={itemShop.image[1]}
              alt="Second slide"
              onClick={() => setOnSelectSlide(1)}
            />
            <Image
              thumbnail
              style={{ width: '5rem', height: '5rem', objectFit: 'scale-down' }}
              src={itemShop.image[2]}
              alt="Third slide"
              onClick={() => setOnSelectSlide(2)}
            />
          </Col>
        </Row>
      </>
    )
  }

  return (
    <Row>
      <Col>
        {/*         <Stack className="bg-dark" direction="horizontal" gap={2}>
          <div className="bg-dark "> */}
        {activeBreadcrumb()}
        {activePic(setOnSelectSlide)}
        <div className="bg-dark">
          <Stack gap={4}>
            <span style={{ color: 'rgb(255,255,255)', paddingLeft: '0' }}>
              <div className="bg-dark">Название:{itemShop.title}</div>
              <div className="bg-dark">Рейтинг:&nbsp;{renderRating(itemShop.rating)}</div>
              <div className="bg-dark">Кол-во (заказов): {itemShop.cost * 5} /&nbsp;шт</div>
              <div className="bg-dark">Цена: {itemShop.cost}&nbsp;тг</div>
              <div className="bg-dark">Описание: {itemShop.description}</div>
              <Stack direction="horizontal" gap={2}>
                <label>Кол-во: </label>
                <input className="mr-auto" type="number" id="typeNumber" placeholder="0" style={{ width: '3em' }} />
                <Button variant="outline-success dark" className="bi bi-cart-plus">
                  В корзину
                </Button>
              </Stack>
            </span>
          </Stack>
        </div>
      </Col>
    </Row>
  )
}
export default ItemViewer
