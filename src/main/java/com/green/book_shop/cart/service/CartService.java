package com.green.book_shop.cart.service;

import com.green.book_shop.cart.dto.CartDTO;
import com.green.book_shop.cart.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {
  private final CartMapper cartMapper;

  //장바구니 등록 기능 메서드
  public void insertCart(CartDTO cartDTO){
    cartMapper.insertCart(cartDTO);
  }

  //장바구니 목록 조회 기능 메서드
  public List<CartDTO> selectCartList(String memEmail){
    return cartMapper.selectCartList(memEmail);
  }
}
