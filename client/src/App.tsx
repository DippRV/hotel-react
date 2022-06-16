import React from 'react';
import {Layout, Menu} from 'antd'
import './App.css'
import {NavLink, Routes, Route, useLocation} from 'react-router-dom'
import Bookings from './pages/Bookings'
import Clients from './pages/Clients'
import Hotels from "./pages/Hotels"
import HotelRooms from "./pages/HotelRooms"

const {Header, Content}  = Layout

const App:React.FC = () => {
    const location = useLocation();

  return (
    <div className="App">
        <Layout className="layout">
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[location.pathname === '/' ?  '/hotels' : location.pathname]}
                >
                    <Menu.Item key="/hotels">
                        <NavLink to="/hotels">
                            <span>Отели</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/hotel-rooms">
                        <NavLink to="/hotel-rooms">
                            <span>Номера</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/clients">
                        <NavLink to="/clients">
                            <span>Клиенты</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/bookings">
                        <NavLink to="/bookings">
                            <span>Брони</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '50px 50px' }}>
                <Routes>
                    <Route path="/" element={<Hotels />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/hotel-rooms" element={<HotelRooms />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/bookings" element={<Bookings />} />
                </Routes>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
