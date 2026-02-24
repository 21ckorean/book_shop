import React from 'react'
import styles from './ManagerSide.module.css'
import { IoAdd } from "react-icons/io5";
import { IoGift } from "react-icons/io5";

const UserSide = () => {
  return (
    <div className={styles.container}>
          <div className={styles.a}>
            <div>
              <div>
                <a href=""><IoGift />장바구니</a>
              </div>
              <div>
                <a href=""><IoGift />구매내역</a>
              </div>
              <div>
                <a href=""><IoGift />내정보수정</a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default UserSide