package com.green.book_shop.book_cate.mapper;

import com.green.book_shop.book_cate.dto.CateDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CateMapper {

  //카테고리 목록조회 쿼리실행 메서드
  List<CateDTO> selectCateList();
}
