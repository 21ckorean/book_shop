package com.green.book_shop.member.controller;

import com.green.book_shop.member.dto.MemberDTO;
import com.green.book_shop.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

  //사용 가능한 이메일인지 체크하는 api (사용가능하면 return true)
  // (GET) localhost:8080/members/checkID/abc
  @GetMapping("/checkId/{memEmail}")
  public ResponseEntity<?> checkId(@PathVariable("memEmail") String memEmail){
    try{
      boolean result = memberService.isUsableEmail(memEmail);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch(Exception e){
      log.error("이메일 중복 체크 실행 중 에러", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //로그인 체크하는 api
  //(GET) localhost:8080/members/login
  @GetMapping("/login")
  public ResponseEntity<?> checkLogin(MemberDTO memberDTO){

    try{
      MemberDTO result = memberService.Login(memberDTO);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch(Exception e){
      log.error("로그인 실행 중 에러", e);
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


