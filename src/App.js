import './App.css';
import './Font.css';
import { clear } from '@testing-library/user-event/dist/clear';
import { Navbar, Container, Nav, Button, Form  } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
// import CategoryProductSerch from './components/CatagoryProductSerch.js';
import BlogCard from './components/blogCard.js';
import SlideBanner from './components/SlideBanner.js';
import HomeBottomBanner from './components/HomeBottomBanner.js';
import HomeTodayEvent from './components/ToadyEvent.js';
import HomeBestProductTab from './components/HomeBestProduct.js';
import CategoryProductSerch from './components/CatagoryProductSerch.js';
import ProductDetailPage from './productpages/productDetailPage';
import shopDataList from './shopDataList';
import Cart from './components/Cart.js'

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">

    {/* <div className='back-div'></div> */}     

    {/* 네이게이션 영역 */}
    <Navbar className='navbar'>

      <nav className='nav-tab'>
        <div className='nav_div1'>
          <Nav.Link href="#" className='nav-tab-title'>회원가입</Nav.Link>
          <Nav.Link href="#" className='nav-tab-title'>로그인</Nav.Link>
          <Nav.Link href="#" className='nav-tab-title'>고객센터</Nav.Link>
          <Nav.Link href="#" className='nav-tab-title'>최근본상품</Nav.Link>
        </div>
        <div className='nav_div2'>
          <Nav.Link onClick={()=>{ navigate('/') }} className='nav-logo'>THE INTERIOR</Nav.Link>
        </div>
        <div className='nav_div3'>
          <Nav.Link onClick={()=>{ navigate('/detail') }} className='nav-tab-title1'>전체상품</Nav.Link>
          <Nav.Link href="#" className='nav-tab-title1'>베스트</Nav.Link>
          <Nav.Link href="#" className='nav-tab-title1'>신상품</Nav.Link>
          <Nav.Link href="#" className='nav-tab-title1'>맞춤가구</Nav.Link>
          <Nav.Link href="#" className='nav-tab-title1'>추천가구</Nav.Link>
          <Nav.Link href="#" className='nav-tab-title1'>집들이</Nav.Link>
          <Nav.Link href="#" className='nav-tab-title1'>기획전</Nav.Link>
        </div>
        <div className='nav_div4'>
          <Nav.Link href="#" className='nav-tab-icon tab-icon1'></Nav.Link>
          <Nav.Link href="#" className='nav-tab-icon tab-icon2'></Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/cart') }} className='nav-tab-icon tab-icon3'></Nav.Link>
        </div>
        <div className='div3-line'></div>
        <p></p>
      </nav>
    </Navbar>

    <Routes>

        <Route path="/" element={
        
        // 메인페이지 안에 보여질 것들
        
        <>   

          {/* // 슬라이드 영역 */}
          {/* <SlideBanner/> */}
          {/* //슬라이드배너의 버튼 */}
          <div className='ban-btn-area'>
            <button className='ban-btn'></button>
            <button className='ban-btn'></button>
            <button className='ban-btn'></button>
            <button className='ban-btn'></button>
            <button className='ban-btn'></button>
          </div>
          

        {/* // 카테고리 선택 8개 영역 */}
        <CategoryProductSerch/>


        {/* //나만의 인테리어 꿀팁 영역 */}
        <BlogCard/>


        {/* //카테고리별 베스트인기 상품 8개보여주기 */}
        <HomeBestProductTab/>


        {/* 메인페이지 하단 배너영역 */}
        <HomeBottomBanner/>


        {/* 오늘의 기획전 */}
        <HomeTodayEvent/>
    

        </>
        }/>
        {/* // 여기까지가 네비 아래 보여지는 메인페이지 라우터 영역 */}
        

        <Route path="/detail" element={ <ProductDetailPage/> }/>
        <Route path="/cart" element={ <Cart/> }/>
        {/* 제품 카테고리별 타입을 눌렀을 때 나오는 목록을 나눌수 있나? */}
        {/* // 예를들면 침대 카테고리를 누르며 침대만 나오게 또한 제품들이 섞여있을때도 타입 id로 구분 될 수 있는지? */}
      
      </Routes>
      
      {/* // 마지막 고정영역 푸터 영역 */}
      {/* 네비와 푸터는 고정이기에 라우츠는 그 사이에 지정 */}
      
      <footer className='footer'>
        <div className='foot'>
          <div className='foot1'>
            <h5>LOGO INTERIOR</h5>
            <p>이용약관</p>
            <p>개인정보처리방침</p>
            <p>사업자정보확인</p>
          </div>
          <div className='foot2'>
            <h5>고객센터</h5>
            <h3>1234-5678</h3>
            <p>월-금 09:00 - 18:00 | 점심시간 12:00 - 13:00</p>
            <p>평일 : 전체문의 상담가능</p>
            <p>주말, 공휴일 : 휴무</p>
          </div>
          <div className='foot3'>
            <h5>Info</h5>
            <p><span></span> 경기도 성남시 둔촌대로 363</p>
            <p><span></span> jas8157@naver.com</p>
            <p><span></span> 010-1234-5678</p>
            <p><span></span> 031-123-4567</p>
          </div>
          
        </div>
        <div className='clear'></div>
      </footer>


    </div>
  );
}





export default App;
