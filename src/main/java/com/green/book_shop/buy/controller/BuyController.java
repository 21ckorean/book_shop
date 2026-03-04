package com.green.book_shop.buy.controller;

import com.green.book_shop.buy.dto.BuyDTO;
import com.green.book_shop.buy.dto.BuyDetailDTO;
import com.green.book_shop.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/buys")
public class BuyController {
  private final BuyService buyService;

  //구매 등록 api
  //(POST) localhost:8080/buys
  @PostMapping("")
  public ResponseEntity<?> addBuy(@RequestBody BuyDTO buyDTO){
    try{
      System.out.println(buyDTO);
      buyService.insertBuy(buyDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch(Exception e){
      log.error("구매 정보 등록 중 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //구매 목록 조회 api
  //(GET) localhost:8080/buys/memEmail
  @GetMapping("/{memEmail}")
  public ResponseEntity<?> getBuyList(@PathVariable("memEmail") String memEmail){
    try{
      List<BuyDTO> list = buyService.selectBuyList(memEmail);
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch(Exception e){
      log.error("구매목록 조회 중 api 에러", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}