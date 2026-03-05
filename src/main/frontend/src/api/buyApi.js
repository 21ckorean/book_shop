import axios from "axios"

//구매정보 등록
export const insertBuy = async (data) => {
  try{
    const responce = await axios.post('http://localhost:8080/buys', data);
    return responce;
  }catch(e){
    console.log('도서 구매 등록 axios 오류', e)
  }
}

//구매목록 조회api
export const getBuyList = async (memEmail) => {
  try{
    const response = await axios.get(`http://localhost:8080/buys/${memEmail}`)
    return response;
  }catch(e){
    console.log('구매목록 조회 axios 에러', e)
  }
}