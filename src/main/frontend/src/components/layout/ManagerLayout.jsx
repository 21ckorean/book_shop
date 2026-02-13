import React from 'react'
import styles from './ManagerLayout.module.css'
import ManagerHeader from './ManagerHeader'
import ManagerSide from './ManagerSide'
import { Outlet } from 'react-router-dom'

////////////////////////////////////////////////////////////////////
//- 매니저가 보는 화면의 레이아웃, 매니저 헤더, 매니저 사이드로 3분할 -//
////////////////////////////////////////////////////////////////////


const ManagerLayout = ({setLoginInfo}) => {
  return (
    <div className={styles.container}>
      <ManagerHeader setLoginInfo={setLoginInfo}/>
      <div className={styles.main}>
        <div className={styles.side}>
          <ManagerSide/>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ManagerLayout