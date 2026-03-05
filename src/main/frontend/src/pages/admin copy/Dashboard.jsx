import React from 'react'
import ListTable from '../../components/common/ListTable'

const Dashboard = () => {
  return (
    <div>
      <div>
        <div>오늘의 주문건수</div>
        <div>이 달의 주문건수</div>
        <div>오늘의 매출금액</div>
        <div>이 달의 매출금액</div>
      </div>
      <div>라인차트</div>
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
  )
}

export default Dashboard