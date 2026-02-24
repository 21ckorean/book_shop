package com.green.book_shop.cart.mapper;

import com.green.book_shop.cart.dto.CartDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartMapper {

  //장바구니 등록 쿼리 실행 추상메서드
  void insertCart(CartDTO cartDTO);

  //장바구니 목록 조회 쿼리 실행 추상메서드
  List<CartDTO> selectCartList(String memEmail);
}
