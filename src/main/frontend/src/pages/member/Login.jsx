import React, { useState } from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import styles from './Login.module.css'
import { login } from '../../api/memberApi'
import { useNavigate } from 'react-router-dom'

const Login = ({setLoginInfo}) => {
  const nav = useNavigate();

  //입력한 정보를 저장할 state변수
  const [loginData, setLoginData] = useState({
    memEmail : '',
    memPw : ''
  });

  //입력할때마다 실행하는 함수
  const handleLoginData = (e) => {
    setLoginData(prev => ({...prev, [e.target.name] : e.target.value}));
  }

  //로그인 버튼 클릭 시 실행 함수
  const goLogin = async() => {
    const response = await login(loginData);

    console.log('111', response);

    //spring에서 null이 리턴되면 리액트에서는 빈문자 ('')로 전달받음
    if(response.data !== ''){ //로그인 가능하면
      alert('로그인 성공');

      //로그인한 회원이 이메일, 이름, 권한 정보를 가진 변수
      const loginInfo = {
        memEmail : response.data.memEmail,
        memName : response.data.memName,
        memRole : response.data.memRole
      };

      //로그인 정보를 sessionStorage에 저장하기 위해서 json(객체를 문자화시킨것)으로 변경
      //JSON.stringify(객체); -> 객체를 json으로 변경
      //JSON.parse(json); -> json 데이터를 객체로 변경

      //Session Storage에 로그인한 유저 정보를 저장
      //sessionStorage.setItem('memEmail', loginInfo);
      sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
  
      //App컴포넌트에서 만든 loginInfo변수에 로그인정보를 저장
      setLoginInfo(loginInfo);

      //도서 목록 페이지나 도서 등록 페이지로 이동
      if(response.data.memRole == 'MANAGER'){
        nav('/manage/manage-home')
      }
      else{
        nav('/');
      }
      


    }
    else{
      alert('ID, PW을 확인하세요.');

      //입력 데이터 초기화
      setLoginData({
        memEmail : '',
        memPw : ''
      });

    }

    console.log('응답 데이터 : ', response.data);
  }

  return (
    <div className={styles.container}>로그인 페이지입니다.
      
      <Input  
        placeholder='Input Your ID'
        name='memEmail'
        value={loginData.memEmail}
        onChange={e => handleLoginData(e)}
      />
      <Input 
        type='password'
        placeholder='Input Your Password'
        name='memPw'
        value={loginData.memPw}
        onChange={e => handleLoginData(e)}

        //키보드 엔터 입력 시 로그인 기능 실행
        onKeyDown={e => {
          if(e.key === 'Enter'){
            goLogin()
          }
        }}
      />
      <Button 
        title='로그인'
        onClick={(e) => goLogin()}
      />
    </div>
  )
}


export default Login