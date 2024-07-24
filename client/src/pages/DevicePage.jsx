import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router-dom'


const DevicePage = (props) => {
    const device = { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_2240,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg' }

    const description = [
        { id: 1, title: 'Оперативная память', description: '5 гб' },
        { id: 2, title: 'Камера', description: '5 гб' },
        { id: 3, title: 'Процессор', description: '5 гб' },
        { id: 4, title: 'Кол-во ядер', description: '5 гб' },
        { id: 5, title: 'Аккумулятор', description: '5 гб' },
    ]

    return (
        <Container className='pt-4'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center justify-content-center'>
                        <h2 style={{ textAlign: 'center' }}>
                            {
                                device.name
                            }
                        </h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{ background: `url(${bigStar}) no-repeat center center`, height: '240px', width: '240px', backgroundSize: 'cover', fontSize: 32 }}
                        >
                            {
                                device.rating
                            }
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='g-flex flex-column align-items-center justify-content-around'
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey' }}
                    >
                        <h3 style={{ textAlign: 'center' }}>
                            От: {device.price} руб.
                        </h3>
                        <Button variant={'outline-dark'}>
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id}
                        style={{ background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10 }}
                    >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}
export default DevicePage;