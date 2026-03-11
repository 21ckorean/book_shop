package com.green.book_shop.study;


import com.green.book_shop.buy.dto.BuyDTO;
import com.green.book_shop.buy.service.BuyService;
import com.green.book_shop.cart.dto.CartDTO;
import com.green.book_shop.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/study")
public class StudyController {
  private final BuyService buyService;
  private final CartService cartService;

  @GetMapping("/test1")
  public Map<Integer, String> mapTest1(){
    //List 객체 생성
    List<String> list = new ArrayList<>();

    //Map 객체 생성
    Map<Integer, String> map = new HashMap<>();

    //map 객체에 데이터 추가
    map.put(1, "java");
    map.put(2, "c++");
    map.put(3, "python");

    return map;
  }

  @GetMapping("/test2")
  public Map<String, Object> test(){
    //key는 문자열, value는 모든 자료형을 담을 수 있는 Map 객체 생성
    Map<String, Object> map = new HashMap<>();
    map.put("1", 1);
    map.put("2", 1.1);
    map.put("2", "aaa");

    return map;
  }

  //구매목록 데이터와 장바구니 목록 데이터를 조회
  @GetMapping("/test3")
  public Map<String, Object> test3(){
    //구매 목록 조회
    List<BuyDTO> buyList = buyService.selectBuyList("aa");

    //장바구니 목록 조회
    List<CartDTO> cartList = cartService.selectCartList("aa");

    //리턴하기전에 두 리스트 데이터를 모두 저장할 수 있는 map객체 생성
    Map<String, Object> map = new HashMap();
    map.put("buyList", buyList);
    map.put("cartList", cartList);
    //구매 목록과 장바구니 목록을 리턴
    return map;
  }



}
