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

//  private MemberMapper memberMapper;

//  @Autowired
//  public MemberService(MemberMapper memberMapper){
//    this.memberMapper = memberMapper;
//  }
}
