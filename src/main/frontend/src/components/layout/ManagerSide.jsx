import React from 'react'
import styles from './ManagerSide.module.css'
import { IoAdd } from "react-icons/io5";
import { IoGift } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ManagerSide = () => {
  const nav = useNavigate();



  return (
    <div className={styles.container}>
      <div>
        <h3><IoAdd/>관리자 홈</h3>
      </div>

      <div className={styles.a}>
        <h3><IoAdd />상품관리</h3>
        <div>
          <div>
            카테고리관리
          </div>
          <div>
            <a href=""
              onClick={() => {
                nav('/manage/book-form')
              }}
            
            ><IoGift />상품등록</a>
          </div>
          <div>
            <a href=""><IoGift />상품재고관리</a>
          </div>
          <div>
            <a href=""><IoGift />상품정보수정</a>
          </div>
        </div>
      </div>

      <div className={styles.b}>
        <h3><IoAdd />구매관리</h3>
        <div>
          <div><a href="">구매내역조회</a></div>
          <div><a href="">월별매출관리</a></div>
          <div><a href="">주간매출관리</a></div>
        </div>
      </div>

      <div className={styles.c}>
        <h3><IoAdd />회원관리</h3>
        <div>
          <div><a href="">회원정보조회</a></div>
          <div><a href="">회원상태변경</a></div>
        </div>
      </div>

    </div>
  )
}

export default ManagerSide