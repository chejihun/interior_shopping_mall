import './App.css';
import './Font.css';
import { clear } from '@testing-library/user-event/dist/clear';
import { Navbar, Container, Nav, Button, Form  } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
// import CategoryProductSerch from './components/CatagoryProductSerch.js';
import BlogCard from './components/blogCard.js';
import SlideBanner from './SlideBanner/SlideBanner.js';
import HomeBottomBanner from './components/HomeBottomBanner.js';
import HomeTodayEvent from './components/ToadyEvent.js';
import HomeBestProductTab from './components/HomeBestProduct.js';
import CategoryProductSerch from './components/CatagoryProductSerch.js';
import ProductDetailPage from './productpages/productDetailPage';
import Cart from './components/Cart.js'
import NavBackFadeIN from './NavBackFadeIn/NavFadein.js';
import Login from './login/Login';
import MemberShip from './login/MemberShip.js';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">  

    <NavBackFadeIN/>
  
    {/* 네이게이션 영역 */}
    <Navbar className='navbar navbar-new'>

    <div className='nav-area'>
      <nav className='logo-wrap'>
        <div className='site-wrap'>
          <div className='logo-img'>
            <div className='vertical'>
              <Nav.Link onClick={()=>{ navigate('/') }} className='nav-logo'>
                <img src={process.env.PUBLIC_URL + 'logo.png'} />
              </Nav.Link>
            </div>
          </div>
          
          <div className='top-member'>
            <div className='vertical'>
              <div className='log-before'>
                {/* //로그인 전 */}
                <Nav.Link onClick={()=>{ navigate('/login') }} className='log-before-menu'>로그인</Nav.Link>
                <Nav.Link onClick={()=>{ navigate('/membership') }} className='log-before-menu'>회원가입
                  <span className='bb'>3,000원</span>
                </Nav.Link>
                {/* // 변경될것 */}
                {/* //로그인 후 */}
                {/* <Nav.Link href="#" className='nav-tab-title'>회원정보</Nav.Link>
                <Nav.Link href="#" className='nav-tab-title'>마이페이지</Nav.Link> */}
                {/* //변경되지 않는 값 */}
                <Nav.Link href="#" className='log-before-menu'>최근본상품</Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </nav> 
      <nav className='cate-wrap'>
        <div className='cate-wrap-inner'>
          <div className='site-wrap'>
            <div className='cate-wrap-left'>
              <Nav.Link onClick={()=>{ navigate('/detail') }} className='nav-cate-all nav-tab-menu'>전체상품</Nav.Link>
              <Nav.Link href="#" className='nav-cate-bset nav-tab-menu'><span className='dd'>베스트</span></Nav.Link>
              <Nav.Link href="#" className='nav-cate-new nav-tab-menu'>신상품</Nav.Link>
              <Nav.Link href="#" className='nav-cate-custom nav-tab-menu'>맞춤가구</Nav.Link>
              <Nav.Link href="#" className='nav-cate-blog nav-tab-menu'>집들이</Nav.Link>
              <Nav.Link href="#" className='nav-cate-event nav-tab-menu'>기획전</Nav.Link>
              <Nav.Link href="#" className='nav-cate-com nav-tab-menu'>고객센터</Nav.Link>
            </div>
          </div>
        </div>
        <div className='cate-wrap-right'>
          {/* //장바구니 */}
          <div className='menu-shop'>
            <Nav.Link onClick={()=>{ navigate('/cart') }} className='nav-tab-icon tab-icon3'>
              <span className='shop-count'>0</span>
            </Nav.Link>
          </div>

          <form id="searchbarform" name action='/' method='get' target='_self' encType='multipart/form-data'>
            <div className='searchheader'>
              <fieldset className='search-hidden'>
                <input id="keyword" name="keyword" className="inputTypeText" placeholder="검색어를 입력해주세요" onmousedown="SEARCH_BANNER.clickSearchForm(this)" type="text" autocomplete="on" autofocus>
                </input>
                <input className="bt-search" type="image" src={process.env.PUBLIC_URL + 'serch_icon.png'} alt="검색">                  
                </input>
              </fieldset>
              <div className='search-dropbox'>
                <div class="xans-element-xans-search xans-search-hotkeyword">
                  <h5>추천 검색어</h5>
                  <p>
                    <a href="/product/search.html?keyword=침대" class="re-keyword">침대</a>
                    <a href="/product/search.html?keyword=소파" class="re-keyword">소파</a>
                    <a href="/product/search.html?keyword=조명" class="re-keyword">조명</a>
                    <a href="/product/search.html?keyword=의자" class="re-keyword">의자</a>
                    <a href="/product/search.html?keyword=서랍" class="re-keyword">서랍</a>									
                  </p>
                </div>
              </div>      
            </div>
          </form>
        </div>
        <div className='clear'></div>
      </nav>
      <div className='clear'></div>
    </div>
    </Navbar>

    <Routes>
        <Route path="/" element={
        // 메인페이지 안에 보여질 것들
        <>   

          {/* // 슬라이드 영역 */}
          <SlideBanner/>

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

        {/* 네비게이션 전체상품/베스트/신상품/맞춤가구/집들이/기획전/커뮤니티 링크  */}
        
        {/* 네비게이션 로그인/회원가입/최근본상품/장바구니 링크 */}
        <Route path="/login" element={ <Login/> }>
          <Route path="/login/membership" element={ <MemberShip/> }/>
        </Route>
        <Route path="/membership" element={ <MemberShip/> }/>
        <Route path="/cart" element={ <Cart/> }/>


        {/* 제품 상세페이지 링크 */}
        <Route path="/detail" element={ <ProductDetailPage/> }/>
        

      
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

    </div> //app 닫기
    
  );
}




export default App;
