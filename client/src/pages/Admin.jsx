import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';
import CreateBrand from '../components/modals/CreateBrand';
import { Button } from 'react-bootstrap';

const Admin = (props) => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button className=" mt-2 p-2" variant='outline-dark' onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            <Button className="mt-2 p-2" variant='outline-dark' onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
            <Button className=" mt-2 p-2" variant='outline-dark' onClick={() => setDeviceVisible(true)}>Добавить устройство</Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />

        </Container>
    )
}
export default Admin;