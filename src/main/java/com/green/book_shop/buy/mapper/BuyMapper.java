package com.green.book_shop.buy.mapper;

import com.green.book_shop.buy.dto.BuyDTO;
import com.green.book_shop.buy.dto.BuyDetailDTO;
import com.green.book_shop.buy.dto.TopBookDTO;
import com.green.book_shop.buy.dto.TopBuyerDTO;
import org.apache.ibatis.annotations.Mapper;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Mapper
public interface BuyMapper {
  //SHOP_BUY 테이블 INSERT
  void insertBuy(BuyDTO buyDTO);

  //BUY_DETAIL 테이블 INSERT
  void insertBuyDetail(BuyDTO buyDTO);

  //구매목록조회
  List<BuyDTO> selectBuyList(String memEmail);



  //오늘과 이 달의 주문건수 및 매출액 조회
  Map<String, Integer> selectSaleInfo();

  //상위 5명 구매자
  List<TopBuyerDTO> selectTopBuyer();


  //판매가 많은 도서 5개
  List<TopBookDTO> selectTopBook();

  //10일간의 매출금액
  //매개변수로 9~0이 들어있는 List를 전달해야 함
  List<Map<String, Object>> selectSale10(List<Integer> dayList);
}