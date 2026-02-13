import React from 'react'
import styles from './ManagerHeader.module.css'
import { Link, useNavigate } from 'react-router-dom';

const ManagerHeader = ({setLoginInfo}) => {
  const nav = useNavigate();

  //로그인 여부 확인
  const loginInfo2 = sessionStorage.getItem('loginInfo');

  //JSON데이터를 객체로 변환
  const loginInfo2_obj = JSON.parse(loginInfo2);

  return (
    <div className={styles.container}>
      <img src="/book_logo.png" className={styles.logo}/>
      <ul>
        <>
          {
            loginInfo2 == null
            ?
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/join'>Join</Link>
              </li>
            </>
            :
            <>
              <li>{loginInfo2_obj.memEmail}님 반갑습니다</li>
              <li>장바구니</li>
              <li 
                style={{cursor : 'pointer'}}
                onClick={e => {
                  sessionStorage.removeItem('loginInfo');
                  setLoginInfo({});
                  nav('/');
                }}             
              >Logout</li>
            </>
          }
        </>
      </ul>
    </div>
  )
}

export default ManagerHeader