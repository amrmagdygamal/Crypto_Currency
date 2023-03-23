import { Avatar, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';

import icon from '../assets/cryptocurrency.png.url'
import { HomeOutlined } from '@ant-design/icons';
import { FundOutlined, MoneyCollectOutlined, BulbOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className='nav__container'>
      <div className="nav__logo">

        <Avatar src={icon} />

        <Typography.Title level={2} className="logo">
          <Link to="/">Crytoverse</Link>
        </Typography.Title>

      </div>

      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
        
      </Menu>
    </div>
  );
}

export default Navbar;

