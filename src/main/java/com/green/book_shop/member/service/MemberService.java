package com.green.book_shop.member.service;

import com.green.book_shop.member.dto.MemberDTO;
import com.green.book_shop.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {
  private final MemberMapper memberMapper;

  //멤버 등록 기능 메서드
  public void join(MemberDTO memberDTO){
    memberMapper.join(memberDTO);
  }

  //사용가능 이메일 확인 기능(사용 가능하면 return true)
  public boolean isUsableEmail(String memEmail){
    //이메일이 조회됐다 -> 중복 이메일이다
    //이메일이 조회 안 됨(email == null) -> 사용 가능 이메일이다
    String email = memberMapper.isUsableEmail(memEmail);
    return email == null;
  }

  //로그인 여부 확인 기능 메서드(로그인 가능하면 return true)
  public MemberDTO Login(MemberDTO memberDTO){
    //로그인 하려는 회원의 이메일, 이름, 권한정보를 리액트에 전달
    //데이터(이메일과 비밀번호)가 조회됐다 -> 로그인 가능하다.
    //데이터(이메일과 비밀번호)가 조회안됨(result == null) -> 로그인 불가능하다.
    MemberDTO result = memberMapper.Login(memberDTO);
    return result; //
  }

}
