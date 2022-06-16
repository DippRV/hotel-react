import React from 'react';
import {Col, Row} from 'antd'

const Clients: React.FC = () => {
    return (
        <Row>
            <Col span={12}>Клиенты</Col>
            <Col span={12}>Форма для клиентов</Col>
        </Row>
    );
};

export default Clients;