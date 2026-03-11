package com.green.book_shop.buy.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class TopBuyerDTO {
  private String memEmail; //이메일
  private int saleCntPerMember; //회원별구매건수
  private int salePerMember; //회원별 구매액
}
