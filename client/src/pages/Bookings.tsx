import React from 'react';
import {Col,Row} from 'antd'

const Bookings: React.FC = () => {
    return (
        <Row>
            <Col span={12}>Брони</Col>
            <Col span={12}>Форма для броней</Col>
        </Row>
    );
};

export default Bookings;