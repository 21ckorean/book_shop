import React, { useEffect, useState } from 'react'
import styles from './CartList.module.css'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import { getCartList } from '../../api/cartApi'
const CartList = () => {


  //조회한 장바구니 목록 정보를 저장할 state변수
  const [cartList, setCartList] = useState([]);


  //마운트시 장바구니 목록 조회
  useEffect(() => {
    selectCartList();
  }, []);


  //장바구니 목록 조회 함수
  const selectCartList = async () => {
    const loginInfo = sessionStorage.getItem('loginInfo');
    const loginInfo_obj = JSON.parse(loginInfo);

    const response = await getCartList(loginInfo_obj.memEmail);
      setCartList(response.data);
      console.log(response.data)
    }

  

  return (
    <div className={styles.container}>     
        <table className={styles.table}>
          <thead>
            <tr>
              <td>NO</td>
              <td>
                <Input 
                  type='checkbox'
                />
              </td>
              <td>도서정보</td>
              <td>가격</td>
              <td>수량</td>
              <td>구매가격</td>
              <td>장바구니 등록 일자</td>
              <td>삭제</td>
            </tr>
          </thead>
          <tbody>          
            {
              cartList.map((cart, i) => {
                return (
                  <tr key={i}>
                  <td>{cart.cartNum}</td>
                  <td>
                    <Input 
                      type='checkbox'
                    />
                  </td>
                  <td>

                    <img style={{width : '60px'}}
                    src={`http://localhost:8080/upload/${cart.book.bookImgList[0].uploadFileName}`}/>

                    {cart.book.bookTitle}</td>
                  <td>{cart.book.bookPrice}</td>
                  <td>
                    <Input 
                      type='text'
                    />
                  </td>
                  <td>60000원</td>
                  <td>{cart.cartDate}</td>
                  <td>
                    <Button 
                      title='삭제'
                    />
                  </td>
               </tr>  
                )
              })
            } 
          </tbody>
        </table>
        <div className={styles.bottom}>
          <div>
            <p>총 구매 가격 : </p>
          </div>
          <div>
            <Button 
              title='선택 삭제'
            />
            <Button 
              title='선택 구매'
            />
          </div>
        </div>    
    </div>
  )
}

export default CartList