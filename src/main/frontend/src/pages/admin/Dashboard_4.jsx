import React from 'react'
import ListTable from '../../components/common/ListTable'

const Dashboard_4 = () => {
  return (
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
  )
}

export default Dashboard_4