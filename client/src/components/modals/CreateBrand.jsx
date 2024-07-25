import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { createBrands } from '../../http/deviceAPI'

const CreateBrand = ({ show, onHide }) => {

    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrands({ name: value }).then(data => setValue(''))
        // .then(data => setValue('')) - что будет происходить после успешной отправки
        onHide() //закрываем модалку
    }

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить новый бренд</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={'Введите название бренда'}
                        />
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>
                        Закрыть
                    </Button>
                    <Button variant="outline-success" onClick={() => addBrand()}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CreateBrand;