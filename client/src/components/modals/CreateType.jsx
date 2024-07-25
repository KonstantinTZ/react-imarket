import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { createTypes } from '../../http/deviceAPI'

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createTypes({ name: value }).then(data => setValue(''))
        // .then(data => setValue('')) - что будет происходить после успешной отправки
        onHide() //закрываем модалку
    }

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить новый тип</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={'Введите название типа'}
                        />
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>
                        Закрыть
                    </Button>
                    <Button variant="outline-success" onClick={() => addType()}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CreateType;