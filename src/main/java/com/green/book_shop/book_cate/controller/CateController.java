package com.green.book_shop.book_cate.controller;

import com.green.book_shop.book_cate.dto.CateDTO;
import com.green.book_shop.book_cate.service.CateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/categories")
public class CateController {
  private final CateService cateService;

  //카테고리 목록 조회 api
  // (GET) localhost:8080/categories
  @GetMapping("")
  public ResponseEntity<?> getList(){
    try{
      //카테고리서비스객체에서 겟카테고리메서드호출결과 리턴되는 데이터를 자료형이 List<CateDTO>인 cateList에 저장한다.
      List<CateDTO> cateList = cateService.getList();
      return ResponseEntity.status(HttpStatus.OK).body(cateList);

    }catch(Exception e){
      log.error("카테고리 목록 조회 중 오류 발생", e);
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }









}
