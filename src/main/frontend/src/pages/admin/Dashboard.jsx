import React from 'react'
import ListTable from '../../components/common/ListTable'
import Dashboard_1 from './Dashboard_1'
import Dashboard_2 from './Dashboard_2'
import Dashboard_3 from './Dashboard_3'
import Dashboard_4 from './Dashboard_4'
import styles from './Dashboard.module.css'

const Dashboard = () => {


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div>
          <Dashboard_1 />
        </div>
        <div>
          <Dashboard_2 />
        </div>
      </div>
      <div className={styles.bottom}> 
        <div>
          <Dashboard_3 />
        </div>
        <div>
          <Dashboard_4 />
        </div>
      </div>
    </div>
  )
}

export default Dashboard