import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { useState } from 'react'
import { useEffect } from 'react'



const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, IsFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [searchItem, setSearchItem] = useState('');


  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchItem.toLowerCase()));
    setCryptos(filteredData);
  }, [cryptoList, searchItem]);
  if(IsFetching) return 'Loading ...........'
  return (
    <>
      {simplified ? '' : (<div className='search-crypto'>
        <Input placeholder='Search Cryptocurrency' onChange={(e)=> setSearchItem(e.target.value)}/>
      </div>)}

      <div>
        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currentcy) => (
              <Col xs={24} sm={12} lg={6} className="crypto-card" key={currentcy.uuid}>
              <Link to={`/crypto/${currentcy.uuid}`}>
                <Card
                  title={`${currentcy.rank}. ${currentcy.name}`}
                  extra={<img className='crypto-image' src={currentcy.iconUrl} alt="Crypto icons"></img>}
                  hoverable
                >
                  <p> Price: {millify(currentcy.price)}</p>
                  <p> MarketCap: {millify(currentcy.marketCap)}</p>
                  <p> Daily Change: {millify(currentcy.change)}</p>


                </Card>
              </Link>
              </Col>
          ))}
        </Row>
      </div>

    </>
  )
}

export default CryptoCurrencies
