import React, { useEffect, useState } from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { getCateList } from '../../api/bookCateApi'
import { insertBook } from '../../api/bookApi'
import styles from './BookForm.module.css'
import Select from '../../components/common/Select'
import Textarea from '../../components/common/Textarea'

const BookForm = () => {
  //조회한 카테고리 목록 데이터를 저장할 state 변수
  //조회할 데이터를 저장할 변수 : 내가 저장할 데이터의 자료형에 맞춰서 작성
  const [cateList, setCateList] = useState([]); //질문

  //Spring으로 전달할 데이터를 저장할 state 변수 (등록)
  //input태그에 적는것
  const [bookData, setBookData] = useState({
    bookTitle : '',
    bookPrice : '',
    author : '',
    bookIntro : '',
    publishDate : '',
    cateNum : '0' //select박스 초기값
  });

  //선택한 이미지 파일을 저장할 state 변수
  const [mainImg, setMainImg] = useState(null); //대표 이미지를 저장할 변수
  const [subImgs, setSubImgs] = useState(null); //상세 이미지를 저장할 변수


  /////////////////////////////////////////////////////////////////////////////////
  //유효성 검사결과 에러 메세지를 저장할 state 변수
  const [errors, setErrors] = useState({
    bookTitle : '',
    bookPrice : '',
    publishDate : '',
    cateNum : ''
  });
  //유효성 검사 실행 함수
  const validateField = () => {
    //유효성 검사 결과를 표현하는 데이터(true : 모든 유효한 데이터다)
    let isValid = true;

    //최신 에러 메세지를 저장할 변수
    const newErrors = {
      bookTitle : '',
      bookPrice : '',
      publishDate : '',
      cateNum : ''
    }

    //제목 유효성 검사
    // 1) 제목을 입력하지 않았을 때
    if(bookData.bookTitle === ''){
      newErrors.bookTitle = '도서명은 필수입력입니다';
      isValid = false;
    }
    // 2) 제목이 최대글자를 넘겼을 때
    if(bookData.bookTitle.length > 10){
      newErrors.bookTitle = '10글자를 초과할 수 없습니다';
      isValid = false;
    }
    //가격 유효성 검사
    // 1) 필수입력 체크
    if(bookData.bookPrice === ''){
      newErrors.bookPrice = '가격은 필수입력입니다';
      isValid = false;
    }
    // 2) 잘못된 데이터(문자x, 0이하)
    // 숫자판단 : isNaN()              NaN : Not a Number
    // 문자 -> 숫자변환 : Number('10')
    if( isNaN(bookData.bookPrice) || Number(bookData.bookPrice) <= 0){
      newErrors.bookPrice = '적합한 데이터가 아닙니다'
      isValid = false;
    }
    //cateNum 유효성 검사
    // 1) cateNum이 '0'일 경우
    if(bookData.cateNum === '0'){
      newErrors.cateNum = '카테고리를 선택하세요'
      isValid = false;
    }
    //publishDate 유효성 검사
    // 1) 날짜 선택
    if(bookData.publishDate === ''){
      newErrors.publishDate = '출판일은 필수항목입니다';
      isValid = false;
    }
      

    //위에서 조건에 따라 작서한 최신 에러메세지를 erros state 변수에 저장
    setErrors(newErrors);

    return isValid;
  }
  /////////////////////////////////////////////////////////////////////////////////

  //마운트시 카테고리 목록 조회
  //useEffect 안의 화살표함수 앞에는 async 못 붙음!!
  useEffect( () => {
    getListData();
  }, [])

  //카테고리 목록 조회 함수
  const getListData = async () => {
    const response = await getCateList();
    setCateList(response.data);
    console.log(response.data);
    //response.status; 질문
    //response.data;  질문
  }

  //데이터 입력마다 실행하는 함수(등록)
  const handleBookData = (e) => {
    setBookData((prev) => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    });

    //키 입력 시 유효성 검사 결과 나오는 에러메세지를 초기화하는 코드
    if(errors[e.target.name]){
      setErrors((prev) => {
        return {
          ...prev,
          [e.target.name] : ''
        }
      })
    }
  }

  //console.log(bookData);

  //'도서등록' 버튼 클릭 시 실행 함수
  const regBook = async () => {
    //유효성 검사 실행
    const isValid = validateField();
    if(!isValid){
      return ;
    }

    //입력한 도서 정보 및 첨부파일 정보를 모두 저장할 수 있는 
    //FormData 객체 생성 및 데이터 적재
    //입력한 데이터 및 파일을 모두 spring으로 보내기 위한 문법
    const regForm = new FormData(); //모든 정보를 담을 통

    //append() 함수는 추가하다 이런뜻임.
    //도서 정보 저장
    regForm.append('bookTitle', bookData.bookTitle);
    regForm.append('bookPrice', bookData.bookPrice);
    regForm.append('author', bookData.author);
    regForm.append('bookIntro', bookData.bookIntro);
    regForm.append('publishDate', bookData.publishDate);
    regForm.append('cateNum', bookData.cateNum);

    //파일 정보 저장
    regForm.append('mainImg', mainImg)

    //상세 파일들 정보 저장
    //배열 데이터를 전달할 수 없기 때문에, 파일 하나하나씩을 반복해서 적재
    for(const e of subImgs){ //subImgs = [File, File, File...]
      regForm.append('subImgs', e);
    }
    //regForm.append('subImgs', File1);
    //regForm.append('subImgs', File2);
    //regForm.append('subImgs', File3);


    const response = await insertBook(regForm);
    if(response.status == 201){
      alert('등록 성공');

      //input태그 내용 초기화
      setBookData({
        bookTitle : '',
        bookPrice : '',
        author : '',
        bookIntro : '',
        publishDate : '',
        cateNum : '0' 
      });
    }
    else{
      alert('등록 실패');
    }
  }

  console.log('subImgs - ', subImgs);

  return (
    <div className={styles.container}>
      <div>
        <p>Book Category</p>
        <Select
          name='cateNum'
          value={bookData.cateNum}
          onChange={e => {handleBookData(e)}}
        >
          <option value='0'>카테고리 선택</option>
          {
            cateList.map((cate, i) => {
              return (
                <option key={cate.cateNum} value={cate.cateNum}>{cate.cateName}</option>
              )
            })
          }
        </Select>
        {errors.cateNum && <p className='error'>{errors.cateNum}</p>}
      </div>

      <div>
        <p>Book Title</p>
        <Input 
          name='bookTitle'
          value={bookData.bookTitle}
          onChange={e => {handleBookData(e)}}
        />
        {errors.bookTitle && <p className='error'>{errors.bookTitle}</p>}
      </div>

      <div>
        <div>
          <p>Price</p>
          <Input 
            name='bookPrice'
            value={bookData.bookPrice}
            onChange={e => {handleBookData(e)}}
          />
          
        </div>
        <div>
          <p>Author</p>
          <Input 
            name='author'
            value={bookData.author}
            onChange={e => {handleBookData(e)}}
          />
        </div>
        {errors.bookPrice && <p className='error'>{errors.bookPrice}</p>}
      </div>

      <div>
        <p>Introduce</p>
        <Textarea
          name='bookIntro'
          value={bookData.bookIntro}
          onChange={e => {handleBookData(e)}}
        >
        </Textarea>
      </div>

      <div>
        <p>Publish Date</p>
        <Input 
          //type = 'datetime-local'
          type='date'
          name='publishDate'
          value={bookData.publishDate}
          onChange={e => {handleBookData(e)}}
        />
        {errors.publishDate && <p className='error'>{errors.publishDate}</p>}
      </div>

      <div>
        <input 
          type="file" 
          //업로드할 파일을 선택할 때 onChange 이벤트 발생
          onChange={
            e => {
              console.log(e.target.files); 
              //선택한 파일의 이름을 console에 출력하는코드
              console.log(e.target.files[0]); //key가 0인 value에 접근
              console.log(e.target.files[0].name); //key가 0인 value의 키name에 접근

              //대표이미지를 mainImg 변수에 저장
              setMainImg(e.target.files[0]);

            }}
        />
      </div>
      <div>
        {/* multiple 속성 다중 가능 */}
        {/* type이 file인건 파일을 선택할때마다 onChange임 */}
        {/* e.target : 이벤트가 발생한.. */}
        <input 
          type="file" 
          multiple={true}
          onChange={e => {
              console.log(e.target.files);
              //선택한 모든 파일명을 console에 출력
              for(let i = 0; i < e.target.files.length; i++){
                console.log(e.target.files[i].name)
              }

              //선택한 파일 전체를 저장할 배열 생성
              const fileArr = [];

              //선택한 파일 수만큼 배열에 파일을 저장
              for(let i = 0; i < e.target.files.length; i++){
                fileArr.push(e.target.files[i]);
              }

              //상세 이미지들이 저장된 배열을 subImgs state 변수에 저장
              setSubImgs(fileArr);

          }}
        />
      </div>

      <div>
        <Button 
          title='도서등록'
          onClick={e => regBook()}
        />
      </div>
      
    </div>
  )
}

export default BookForm