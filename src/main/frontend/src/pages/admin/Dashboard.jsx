import React, { useEffect, useState } from 'react'
import ListTable from '../../components/common/ListTable'
import styles from './Dashboard.module.css'
import { dashborad_1, dashborad_2, dashborad_3, dashborad_4 } from '../../api/buyApi';
import TestBarChart from '../../components/buy/TestBarChart';

const Dashboard = () => {
  //오늘, 이 달의 주문건수 및 매출액 정보를 저장할 변수
  const [saleInfo, setSaleInfo] = useState({});

  //top 5 구매자 정보를 저장할 변수
  const [topBuyer, setTopBuyer] = useState([]);
  //top 5 도서 정보를 저장할 변수
  const [topBook, setTopBook] = useState([]);
  //최근 10일간의 매출정보를 저장할 변수
  const [saleTen, setSaleTen] = useState([])

  //마운트 시 모든 데이터 조회
  useEffect(() => {
    getAllData();
  }, [])

  //모든 데이터를 조회하는 함수
  const getAllData = async () => {
    //한 번에 다수의 api를 조회
    const [response1, response2, response3, response4] = await Promise.all([
      dashborad_1(), //1
      dashborad_2(), //1
      dashborad_3(), //2
      dashborad_4()  //1
    ]);

    //조회한 데이터를 저장
    console.log('1번 데이터', response1.data)
    setSaleInfo(response1.data);
    console.log('2번 데이터', response2.data)
    setTopBuyer(response2.data);
    console.log('3번 데이터', response3.data)
    setTopBook(response3.data);
    console.log('4번 데이터', response4.data)
    setSaleTen(response4.data);


    // const arr = [2,4,6]
    // const result = arr;
    // result[0] = 2

    // 구조분해할당
    // const arr = [2,4,6]
    // const [a,b,c] = arr;

    // 아래의 함수를 한꺼번에 처리할 방법없을까?
    // const response1 = await dashborad_1(); 1초
    // const response2 = await dashborad_2(); 1초
    // const response3 = await dashborad_3(); 1초
    // const response4 = await dashborad_4(); 1초 총 4초걸림
  }

  return (
    <div className={styles.container}>

      <div className={styles.left}>
        <div>
          <div>
            <div>
              오늘의 주문건수

            </div>
            <div>
              이 달의 주문건수
            </div>
          </div>
          <div>
            <div>
              오늘의 매출금액

            </div>
            <div>
              이 달의 매출금액

            </div>
          </div>
        </div>

        <div>
          <p>구매 랭킹(상위 5명)</p>
          <ListTable>
            <thead>
              <tr>
                <td>랭킹</td>
                <td>이메일</td>
                <td>구매건수</td>
                <td>구매금액</td>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </ListTable>
        </div>       
      </div>

      <div className={styles.right}> 
        
        <div>
          <p>인기 도서 랭킹(상위 5권)</p>
          <ListTable>
            <thead>
              <tr>
                <td>랭킹</td>
                <td>도서명</td>
                <td>저자</td>
                <td>판매건수</td>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </ListTable>
        </div>
      </div>
    <TestBarChart chartData={saleTen} />
    </div>
  )
}

export default Dashboard