import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic } from 'antd';
import millify from 'millify';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { ContactSupportOutlined } from '@material-ui/icons';
import CryptoCurrencies from './CryptoCurrencies';
import News from './News';
const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading ....'
  return (
    <>
      <Title level={2} className="Heading"> Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptoccurrencies" value={millify(globalStats.total)} ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Total 24h Volume" value={millify(globalStats.total24hVolume)} ></Statistic>
        </Col>

      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title"> Top 10 Cryptocurrencies </Title>
        <Title level={3} className="show-more"> <Link to='/cryptocurrencies' >Show More</Link></Title>
      </div>
      <CryptoCurrencies simplified></CryptoCurrencies>
      <div className="home-heading-container">
        <Title level={2} className="home-title"> Latest Crypto News </Title>
        <Title level={3} className="show-more"> <Link to='/news' >Show More</Link></Title>
      </div>
      <News simplified></News>
    </>
  )
}

export default Homepage
