package com.green.book_shop.book.service;

import com.green.book_shop.book.dto.BookDTO;
import com.green.book_shop.book.mapper.BookMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
  private final BookMapper bookMapper;


  //도서 등록 기능 메서드
  public void regBook(BookDTO bookDTO){
    System.out.println("도서 등록");
    bookMapper.insertBook(bookDTO);
  }

  //도서 목록 조회 기능 메서드
  public List<BookDTO> selectList(){
    System.out.println("도서목록조회");
    return bookMapper.selectBookList();
//    List<BookDTO> bookList = bookMapper.selectBookList();
//    return bookList;
  }
}
