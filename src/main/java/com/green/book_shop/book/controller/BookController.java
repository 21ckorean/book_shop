package com.green.book_shop.book.controller;

import com.green.book_shop.book.dto.BookDTO;
import com.green.book_shop.book.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j //로그 쓰기위해서 사용
@RestController
@RequiredArgsConstructor
@RequestMapping("/books")
public class BookController {
  private final BookService bookService;

  //도서 등록 api
  //(POST) localhost:8080/books
  @PostMapping("")
  public ResponseEntity<?> regBook(@RequestBody BookDTO bookDTO){
    try{
      bookService.regBook(bookDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch(Exception e){
      log.error("도서 등록 api 에러", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //도서 조회 api
  //(GET) localhost:8080/books
  //컨트롤러의 매개변수는 쿼리에서 받아오는 매개변수가 있을때 작성
  @GetMapping("")
  public ResponseEntity<?> getBooklist(){
    try{
      List<BookDTO> list = bookService.selectList();
      return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }catch(Exception e){
      log.error("도서 목록 조회 에러", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}
