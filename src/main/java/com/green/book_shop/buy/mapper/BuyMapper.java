package com.green.book_shop.buy.mapper;

import com.green.book_shop.buy.dto.BuyDTO;
import com.green.book_shop.buy.dto.BuyDetailDTO;
import org.apache.ibatis.annotations.Mapper;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Mapper
public interface BuyMapper {
  //SHOP_BUY 테이블 INSERT
  void insertBuy(BuyDTO buyDTO);

  //BUY_DETAIL 테이블 INSERT
  void insertBuyDetail(BuyDTO buyDTO);

  //구매목록조회
  List<BuyDTO> selectBuyList(String memEmail);

  //오늘 구매목록조회
  List<BuyDTO> selectTodayOrder(LocalDateTime buyDate);
}