import React from 'react';
import {Breadcrumb, Layout, Menu} from 'antd'
import './App.css'
const {Header, Content, Footer}  = Layout

const App:React.FC = () => {
  return (
    <div className="App">
        <Layout className="layout">
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: 1,
                            label: `Отели`,
                        },
                        {
                            key: 2,
                            label: `Номера`,
                        },
                        {
                            key: 3,
                            label: `Клиенты`,
                        },
                        {
                            key: 4,
                            label: `Брони`,
                        },
                    ]}
                />
            </Header>
            <Content style={{ padding: '50px 50px' }}>
                Hello world!
            </Content>
        </Layout>
    </div>
  );
}

export default App;
