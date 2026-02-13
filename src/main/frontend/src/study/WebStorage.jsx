import React, { useState } from 'react'

//Web Storage(cookie, localstorage, sessionstorage)
//에는 문자열 데이터만 저장 가능
const WebStorage = () => {

    //Local Storage에 데이터 저장
  localStorage.setItem('local-name', 'kim');
  localStorage.setItem('local-age', '20');

  //Local Storage에 저장된 데이터 읽기
  localStorage.getItem('local-name'); //kim
  localStorage.removeItem('local-age'); // key가 local-age인 데이터 삭제


  //sesstion storage에 데이터 저장
  sessionStorage.setItem('session-name', 'lee')
  sessionStorage.setItem('session-age', '30')
  
  //sesstion storage에 저장된 데이터 읽기
  sessionStorage.getItem('session-age'); // '30'
  sessionStorage.removeItem('session-age'); 


  const [cnt1, setCnt1] = useState(0);

  return (
    <div>
      <p>{cnt1}</p>
      <button 
        type='button'
        onClick={e => {
          setCnt1(cnt1 + 1);
        }}
      >클릭</button>
    </div>
  )
}

export default WebStorage