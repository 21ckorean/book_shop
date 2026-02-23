import React, { useEffect, useState } from 'react'
import styles from './BookList.module.css'
import EachBook from '../../components/book/EachBook'
import { getBookList } from '../../api/bookApi';

const BookList = () => {
  //조회한 도서 목록 데이터를 저장할 state 변수
  const [bookList, setBookList] = useState([]);


  //마운트 시 도서 목록 조회
  useEffect(() => {
    getList();
  }, []);

  //도서 목록 조회 함수
  const getList = async () => {
    const response = await getBookList();
    setBookList(response.data);
    console.log(response.data);
  }


  return (
    <div className={styles.container}>
      {
        bookList.map((book, i) => { 
          //bookList에서 하나씩뺀 book은 자료형이 객체이다.
          return (
            <EachBook key={i} book={book}/>
          )
        })
      }
    </div>
  )
}

export default BookList