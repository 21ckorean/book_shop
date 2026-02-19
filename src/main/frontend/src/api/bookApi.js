//SHOP_BOOK 테이블과 관련된 AXIOS 기능 정의 파일

import axios from "axios";

//도서 등록 함수
//파일도 함께 전달하기 위해서는 통신 설정을 변경해야 함
export const insertBook = async (bookData) => {
  try{
    //변수로 객체만드는거임.
    //fileConfig가 뭐하는거냐면..
    //데이터 전송 시 파일 데이터도 포함시킨다는 설정
    //'multipart/form-data'는 그냥 첨부파일 지정어임.
    const fileConfig = {
      header : {'Content-Type' : 'multipart/form-data'}
    };

    const response = await axios.post('http://localhost:8080/books', bookData, fileConfig);
    return response;
  }catch(e){
    console.log('도서 등록 axios 에러', e);
  }
}


//도서 목록 조회 axios
export const getBookList =  async() => {
  try{
    const response = await axios.get('http://localhost:8080/books');
    return response;
  }catch(e){
    console.log('도서 목록 조회 axios 오류', e)
  }
}