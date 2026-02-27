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

  //장바구니 중복 확인 쿼리
  String isDuplicateBook(CartDTO cartDTO);

  //장바구니에 담긴 도서 수량 변경 쿼리
  void updateCartBook(CartDTO cartDTO);

  //장바구니 삭제쿼리
  void deleteCart(int cartNum);

  //장바구니 수량 변경 쿼리
  void updateCartCnt(CartDTO cartDTO);

  //장바구니 선택 삭제 쿼리
  void deleteCarts(List<Integer> cartNumList);

}
