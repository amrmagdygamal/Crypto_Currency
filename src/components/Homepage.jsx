import React from 'react';
import millify from 'millify';
import Typography from 'antd/es/typography/Typography';
import { Col, Row, Statistic } from 'antd';
import { useGetCryptsQuery } from '../services/cryptoApi';

const { Title } = Typography;
const Homepage = () => {

  const { data, isFetching } = useGetCryptsQuery();

  console.log(data);


  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        {/* <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.exchanges)} /></Col> */}
        
      
      </Row>
    </>
  );
}

export default Homepage;
