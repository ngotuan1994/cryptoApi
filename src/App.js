

import React from 'react';
import {Routes, Route , Link} from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import { Navbar, Footer, HomePage, CryptoDetails, CryptoCurrencies, News } from './components'
import './App.css'
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar>

        </Navbar>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes basename={''}>
              <Route  path="/" element={<HomePage />} />
              <Route path="/cryptoApi/" element={<HomePage />} />




              <Route exact path="/cryptocurrencies" element={<CryptoCurrencies />} />


              <Route exact path="/crypto/:coinID" element={<CryptoDetails />} />


              <Route exact path="/news" element={<News />} />


            </Routes>
          </div>
        </Layout>

       <div className='footer'>
         <Typography.Title level={5} style={{ color: 'white', textAlign : "center" }}>
           Cryptoverse <br />
           All rights reserved
         </Typography.Title>
         <Space>
           <Link to="/">Home</Link>

           <Link to="/news">News</Link>
         </Space>
        </div>
      </div>
    </div>
  )
}


export default App;
