import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Dropdown, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Context } from '../../index'

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить новое устройство</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Form>
                        <Form.Control
                            placeholder={'Введите название устройства'}
                        />
                    </Form> */}
                    <div className="row mb-4">

                        <Dropdown variant='outline-dark' className='col-6'>
                            <Dropdown.Toggle>Выберете тип</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type =>
                                    <Dropdown.Item key={type.id}>
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown variant='outline-dark' className='col-6'>
                            <Dropdown.Toggle>Выберете бренд</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(brand =>
                                    <Dropdown.Item key={brand.id}>
                                        {brand.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <Form.Control
                        className='mb-3'
                        placeholder={'Введите название устройства'}
                    />
                    <Form.Control
                        type='number'
                        className='mb-3'
                        placeholder={'Введите стоимость'}
                    />
                    <Form.Label>Загрузите фотографию товара</Form.Label>
                    <Form.Control
                        type='file'
                        className='mb-3'
                    />
                    <hr />
                    <Button
                        onClick={() => addInfo()}
                        className='mb-2'
                    >
                        Добавить новое свойство
                    </Button>
                    {
                        info.map(i =>
                            <Row className='mb-2' key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Введите название свойства'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Введите описание свойства'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => removeInfo(i.number)}
                                        variant='outline-danger'
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>
                        Закрыть
                    </Button>
                    <Button variant="outline-success" onClick={onHide}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CreateDevice;