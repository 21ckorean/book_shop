package com.green.book_shop.book.mapper;

import com.green.book_shop.book.dto.BookImgDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookImgMapper {
  //도서 이미지 등록 쿼리 실행메서드
  //insert니까 리턴타입 그냥 void함
  //매개변수 뭐로할까?
  void insertImages(List<BookImgDTO> imgList);

}
