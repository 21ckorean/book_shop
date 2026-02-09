package com.green.book_shop.member.controller;

import com.green.book_shop.member.dto.MemberDTO;
import com.green.book_shop.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {
  private final MemberService memberService;

  //회원가입 api
  // (POST) localhost:8080/members
  @PostMapping("")
  public ResponseEntity<?> join(@RequestBody MemberDTO memberDTO){
    try{
      memberService.join(memberDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch(Exception e){
      log.error("회원가입 작업 중 에러 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}

//  private MemberService memberService;
//  public MemberController(MemberService memberService){
//    this.memberService = memberService;
//  }
//  public void aaa(){
//    final int a = 10;//상수, final 키워드가 붙으면 변수의 값 변경이 불가
//    //a = 20; -> a는 상수기 떄문에 값 변경 불가!!
//
//    final MemberDTO dto = new MemberDTO();
//    dto.setMemName("java"); 가능
//    // dto = new MemberDTO(); 불가능
//
//  }


