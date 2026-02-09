package com.green.book_shop.member.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
//@RequiredArgsConstructor // 맴버변수중에 final이 붙어있는것만 생성자로만들어줌.
public class MemberDTO {
  private String memEmail;          // 이메일 (Primary Key)
  private String memPw;             // 비밀번호
  private String memName;           // 이름
  private String memTel;            // 전화번호
  private String memAddr;           // 주소
  private String addrDetail;        // 상세주소
  private String isUsing;           // 사용여부 (Y/N)
  private String memRole;           // 권한 ()
  private LocalDateTime joinDate;   // 가입일시
}
