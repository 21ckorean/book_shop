import React from 'react'
import ListTable from '../../components/common/ListTable'

const Dashboard_3 = () => {
  return (
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
  )
}

export default Dashboard_3