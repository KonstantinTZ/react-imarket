import React from 'react';
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className='mb-4' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ with: 150, cursor: 'pointer', }} border={"light"}>
                <Image with={150} height={150} src={device.img} />
                <div className='d-flex justify-content-between align-items-center text-black-50'>
                    <div >
                        samsung...
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className=''>
                            {device.rating}
                        </div>
                        <Image width={18} height={18} src={star} />
                    </div>
                </div>
                <div>
                    {
                        device.name
                    }
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;