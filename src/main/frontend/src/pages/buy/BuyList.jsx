import React, { useEffect, useState } from 'react'
import styles from './BuyList.module.css'
import { getBuyList } from '../../api/buyApi';

const BuyList = () => {

  //구매한 도서목록을 저장할 state 변수
  const [buyList, setBuyList] = useState([]);

  //마운트시 구매목록 조회
  useEffect(() => {
    getBuys();
  }, [])

  //구매목록 조회함수
  const getBuys = async() => {
    //로그인 이메일확인
    const memEmail = JSON.parse(sessionStorage.getItem('loginInfo')).memEmail

    //구매한도서목록api를 이용해서 state변수에 값채우기
    const response = await getBuyList(memEmail);
    setBuyList(response.data);

    console.log('구매한도서목록 리스트 : ', response.data);
  }

  return (
    <div>
      {
        buyList.map((cart, i) => {
         return(
          <div 
            className={styles.cart}
            key={i}
          >
            <div>
              <span>{cart.buyNum} |</span>
              <span>bookTitle or bookTitle 외 몇개</span>
              <span>{cart.buyPrice}</span>
              <span>{cart.buyDate}</span>
            </div>
            
              <table className={styles.table}>
                <thead>
                  <tr>
                    <td>NO</td>
                    <td>도서 정보</td>
                    <td>가격</td>
                    <td>수량</td>
                    <td>구매가격</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>목록길이-i 번호</td>
                    <td>uploadFileName, BookTitle</td>
                    <td>bookPrice</td>
                    <td>cartCnt</td>
                    <td>bookPrice * cartCnt</td>
                  </tr>
                </tbody>
              </table>
            
          </div>
         )
        })
      }  
    </div>
  )
}

export default BuyList