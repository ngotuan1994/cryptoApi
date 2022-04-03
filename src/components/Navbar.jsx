import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, FunctionOutlined } from '@ant-design/icons'
import icon from "../images/crypto-icon2.png"
const Navbar = () => {
  let i = 1;
  return (
    <div className="nav-container">
      <div className='logo-container'>
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className='logo'>
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>

      </div>
      <Menu theme='dark'>
        <Menu.Item key={i++}icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key={i++} icon={<FunctionOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key={i++} icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>

      </Menu>
    </div>
  )
}

export default Navbar
