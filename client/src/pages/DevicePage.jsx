import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI';


const DevicePage = (props) => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    return (
        <Container className='pt-4'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
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
                {device.info.map((info, index) =>
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