import React from 'react';
import {Col, Row} from 'antd'

const HotelRooms: React.FC = () => {
    return (
        <Row>
            <Col span={12}>Комнаты</Col>
            <Col span={12}>Форма для комнат</Col>
        </Row>
    );
};

export default HotelRooms;