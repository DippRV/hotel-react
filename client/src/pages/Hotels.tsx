import React from 'react';
import {Row, Col} from 'antd'

const Hotels:React.FC = () => {
    return (
        <Row>
            <Col span={12}>Отели</Col>
            <Col span={12}>Форма для отелей</Col>
        </Row>
    );
};

export default Hotels;