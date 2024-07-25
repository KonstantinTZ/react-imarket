import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Dropdown, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Context } from '../../index'

import { createDevices, fetchBrands } from '../../http/deviceAPI';
import { fetchTypes } from '../../http/deviceAPI';

import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState(null)

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevices(formData).then(data => onHide())
    }

    useEffect(() => {
        fetchBrands().then(data => device.setBrands(data))
        fetchTypes().then(data => device.setTypes(data))
    }, [])

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
                            <Dropdown.Toggle>{device.selectedType.name || 'Выберете тип'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type =>
                                    <Dropdown.Item
                                        onClick={() => device.setSelectedType(type)}
                                        key={type.id}>
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown variant='outline-dark' className='col-6'>
                            <Dropdown.Toggle>{device.selectedBrand.name || 'Выберете бренд'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand =>
                                    <Dropdown.Item
                                        onClick={() => device.setSelectedBrand(brand)}
                                        key={brand.id}>
                                        {brand.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mb-3'
                        placeholder={'Введите название устройства'}
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        type='number'
                        className='mb-3'
                        placeholder={'Введите стоимость'}
                    />
                    <Form.Label>Загрузите фотографию товара</Form.Label>
                    <Form.Control
                        type='file'
                        className='mb-3'
                        onChange={selectFile}
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
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        placeholder="Введите название свойства"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        placeholder="Введите описание свойства"
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
                    <Button variant="outline-success" onClick={addDevice}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
})
export default CreateDevice;