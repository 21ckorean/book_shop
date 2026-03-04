package com.green.book_shop.buy.dto;

import com.green.book_shop.book.dto.BookDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class BuyDetailDTO {
  private int buyDetailNum;
  private int bookNum;
  private int buyCnt;
  private int buyNum;
  private BookDTO bookDTO;
}