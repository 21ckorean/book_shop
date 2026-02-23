import React, { useEffect, useState } from 'react'
import { getBookDetail } from '../../api/bookApi'
import { useParams } from 'react-router-dom';
import styles from './BookDetail.module.css'
import Button from '../../components/common/Button';

const BookDetail = () => {
  const param = useParams();
 
  //조회한 도서 상세 정보 state 변수
  const [bookInfo, setBookInfo] = useState({});

  // 마운트시 상세도서 조회
  useEffect(() => {
    getdetail();
    console.log(param);
  }, [])

  //도서 상세 조회 함수
  const getdetail = async () => {
    const response = await getBookDetail(param.bookNum);
      setBookInfo(response.data);
    }
  
  //수량 정보 state변수
  const [bookCnt, setBookCnt] = useState(1);

  console.log(bookInfo);

  // const test_data = [
  //   {
  //     id: 1,
  //     itemName : '1번상품',
  //     price : 1000
  //   },
  //   {
  //     id: 1,
  //     itemName : '1번상품',
  //     price : 1000
  //   },
  //   {
  //     id: 1,
  //     itemName : '1번상품',
  //     price : 1000
  //   }
  // ]



  //filter는 조건에 맞는 데이터만 모아서 배열로 반환
  //filter(() => {})
  // test_data.filter((e) => {return e.id === 1})[0];
  // test_data.filter(e => e.id === 1)[0];



  return (
    <div className={styles.container}>
      <div className={styles.a}>
        <div className={styles.b}>
          <div >
            {
              bookInfo.bookImgList &&
              bookInfo.bookImgList.map((img, i) => {
                if(img.isMain == 'Y'){
                  return (
                    <img className={styles.mainImg}
                         key={i} 
                         src={`http://localhost:8080/upload/${img.uploadFileName}`}/>
                  )
                }
              })

              // <img src={`http://localhost:8080/upload/${bookInfo.bookImgList.filter((e) => {return e.isMain === 'Y'})[0].uploadFileName }`} />

            }

          </div>
          
          <div className={styles.main}>
            <div className={styles.info}>
              <p>{bookInfo.bookTitle}</p>
              
              <p> {bookInfo.author}</p>
              {/* <p>{bookInfo.bookPrice?.toLocaleString()}</p> */}
              <p> {bookInfo.bookPrice && bookInfo.bookPrice.toLocaleString()}원</p>
              <input 
                type="text" 
                value={bookCnt}
                onChange={e => {
                  setBookCnt(e.target.value)
                }}
              />        
              <p>총 구매가격 : {bookCnt * bookInfo.bookPrice}</p>
            </div>
            <div className={styles.button}>
              <Button 
                title='장바구니에 담기'
                onClick={()=>{}}
              />
              <Button 
                title='바로 구매'
                onClick={()=>{}}
              />
            </div>
          </div>
        </div>
       
        <div>
          {bookInfo.bookIntro}
        </div>
      </div>

      <div>
            {
              bookInfo.bookImgList &&
              bookInfo.bookImgList.map((img, i) => {
                if(img.isMain == 'N'){
                  return (
                    <img key={i} src={`http://localhost:8080/upload/${img.uploadFileName}`}/>
                  )
                }
              })
            }
      </div>
    </div>
  )
}

export default BookDetail