import React, { useState } from 'react'
import ListTable from '../../components/common/ListTable'
import Dashboard_1 from './Dashboard_1'
import Dashboard_2 from './Dashboard_2'
import Dashboard_3 from './Dashboard_3'
import Dashboard_4 from './Dashboard_4'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  //오늘, 이 달의 주문건수 및 매출액 정보를 저장할 변수
  const [saleInfo, setSaleInfo] = useState({});

  //top 5 구매자 정보를 저장할 변수
  const [topBuyer, setTopBuyer] = useState([]);
  //top 5 도서 정보를 저장할 변수
  const [topBook, setTopBook] = useState([]);
  //최근 10일간의 매출정보를 저장할 변수
  const [saleTen, setSaleTen] = useState([])

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <Dashboard_1 />
        </div>
        <div>
          <Dashboard_3 />
        </div>
        
      </div>
      <div className={styles.right}> 
        <div>
          <Dashboard_2 />
        </div>
        <div>
          <Dashboard_4 />
        </div>
      </div>
    </div>
  )
}

export default Dashboard