import { clear } from '@testing-library/user-event/dist/clear';
import { Navbar, Container, Nav, Button, Form  } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import blogdata from './mytipdata.js';
import eventdata from './eventdata.js';
import categorydata from './categorydata.js'; // 카테고리
import tabdata from './catetebdata.js';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import shopDataList from './shopDataList.js';
// import TabBed from './tabbed.js'
import Test from './test.js'

import './App.css';

function App() {
  // let [tabbed] = useState(bedData)
  let [mytip] = useState(blogdata)
  let [dayevent] = useState(eventdata)
  let [category] = useState(categorydata)
  let [categorytab] = useState(tabdata)
  let navigate = useNavigate();
  const [tab, setTab] = useState(0);



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
          <Nav.Link href="#" className='nav-tab-icon tab-icon3'></Nav.Link>
        </div>
        <div className='div3-line'></div>
        <p></p>
      </nav>
    </Navbar>

    <Routes>

        <Route path="/" element={
          //메인페이지 안에 보여질 것들
        

        <>
         

           {/* // 슬라이드 영역 */}
          <div className="main-bg ">

            <div className='ban-container'>
              <div className='slide-banner'>하나</div>
            </div>

          </div>

          <div className='ban-btn-area'>
            <button className='ban-btn '></button>
            <button className='ban-btn'></button>
            <button className='ban-btn'></button>
            <button className='ban-btn'></button>
            <button className='ban-btn'></button>
          </div>
          

          {/* // 카테고리 선택 8개 영역 */}
          <div className='main-cate'>
            <h3 className='main-cate-title'>카테고리별 상품 찾기</h3>

            <div className="cate-teb">
              {
                [1,2,3,4,5,6,7,8].map((a, i)=>{
                  return(
                    <Category category={category[i]} i={i}></Category>
                  )
                })
              }
            </div>
          </div>


          {/* //나만의 인테리어 꿀팁 영역 */}

          <div className="container tip-area">
            <h3 className='main-bl-title'>나만의 인테리어 꿀팁</h3>
            <p className='sub-bl-title'>나만의 멋스럽고 이쁜 홈인테리어 꿀팀 대방출</p>
            <a href="#" className='main-bl-link'> 더보기 - </a>
            <div className="row">
              {
                [1,2,3].map((a, i)=>{
                  return(
                    <Blog mytip={mytip[i]} i={i}></Blog>
                  )
                })
              }
            </div>
          </div>


          {/* //카테고리별 베스트 상품 찾기 */}
          <div className='tab-area'>
            <h3 className='main-tab-title'>베스트 인기상품</h3>
            <Nav variant="tabs" defaultActiveKey="link0" className="main-pro-tab">
            {/* <Nav variant="tabs"  defaultActiveKey="link0" className="main-pro-tab"> */}
               {
                categorytab.map((categoryInfo, i)=>{
                  return(
                    <Categorytab i={i} setTab={setTab} type={categoryInfo.type} title={categoryInfo.title}
                    ></Categorytab>    
                  )
                })
              }
            </Nav>
            <TabProduct tab={tab}  />
          </div>
        

        {/* 메인페이지 배너영역 */}
        <div className='main-banner'>
          <img className='ban-img' src={process.env.PUBLIC_URL + 'banner1.jpg'} />
        </div>


        {/* 오늘의 기획전      */}
        <div className="container event-area">
            <h3 className='main-event-title'>오늘의 기획전</h3>
            <a href="#" className='main-envet-link'> 더보기 - </a>
            <div className="row">
              {
                [1,2,3].map((a, i)=>{
                  return(
                    <Todayevent dayevent={dayevent[i]} i={i}></Todayevent>
                  )
                })
              }
            </div>
        </div>
        
        </>
        }/>
        {/* // 여기까지가 네비 아래 보여지는 메인페이지 라우터 영역 */}
        

        <Route path="/detail" element={<div>대충 서브페이지 여기는 카테고리 중 하나 넣을 것</div>}/>
      
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
        
      </footer>


    </div>
  );
}
// 카테고리별 상품 찾기
function Category(props){
  return (
      <a href="#" className='cate-teb-link'>
        <img className="cate-img" src={process.env.PUBLIC_URL + '/categoryimage/category' + (props.i+1) + '.png'}/>
        <p className='cate-title'> { props.category.title } </p>
      </a>
  )
}

//나만의 팁 영역
function Blog(props){
  return (
    <div className="col-md-4 tip-blog">
      <img className="blog-img" src={process.env.PUBLIC_URL + '/blogimage/blog' + (props.i+1) + '.jpg'}/>
      <h4 className='blog-title'> { props.mytip.title } </h4>
      <p className='blog-content'> { props.mytip.content } </p>
      <a href="#" className='blog-link'>자세히 알아보기  </a>
    </div>
  )
}

// 베스트 인기 탭 메뉴 클릭 영역
function Categorytab(props){
  // console.log(props)
  const setTab = props.setTab 

  return ( 
    <Nav.Item className='tab-nav'>
      <Nav.Link id="tab-link" classNam='tab-link' onClick={()=>{ setTab(props.type) }}
      eventKey={`link${props.i}`} type={props.type} 
      > { props.title }</Nav.Link>

    </Nav.Item>
  )
}



//탭 큰데이터 영역
function TabProduct(props){
   
  const tabDataList = getDataList(props.tab)
  const productList = shopDataList;

  //여기서 데이터 리스트를 타입별로 불러오고
  function getDataList(tabTarget){
    
    return shopDataList.filter(data => {
    return data.type === tabTarget})
  }
 
  // 여기서 불러온 타입을 리뷰순으로 정리하고
  function reviewProduct(productList, type){
    let filterProduct = productList;
    
    if  (type && type !== 'all'){
      filterProduct = productList.filter((product) => product.type === type);
    } 
    const sortedProducts = filterProduct.sort((a, b) => b.review - a.review);
    const topProduct = sortedProducts.slice(0, 8);
    
    return topProduct;
  }
  console.log(reviewProduct(productList, 'all'))
  // 그렇다면 여기서 문제! all이라는 type은 없는데? 

  // 여기서 정리된 아이템을 8개만 보여준다는거 아닌가?
  return (
    <div className='row'>
      {tabDataList.filter((data, index) => {
        const viewLimit = 8
        return index < viewLimit
      }).map((item, index) => {
        return <TabAlignItem item={item} i={index}/>
      }) 
      }
    </div>
  )
}



//전체 자리는 아래 제품들이 섞여 있는거일텐데 어떻게 구성할지?

//이걸 어떻게 위에 자리에 div대신 넣어야 하는지?
//각 useParams를 이용해서 정렬시 id로 고유 순서 안바뀌게 할것
//클릭시 데이터 파일로 이동해야하는데 onclick을 어디에 걸어야하는지?

function TabAlignItem(props){
  return(
      <div className="col-md-3 tab-product" >
        {/* <img className="tab-img" src={process.env.PUBLIC_URL + '/tabimage/bed' + (props.i+1) + '.jpg'}/> */}
        <img className="tab-img" src={ props.item.src }/>
        <h4 className='tab-title'> { props.item.title } </h4>
        <h5 className='tab-sale'> { props.item.sale }<span className='tab-span'>%</span> </h5>
        <h5 className='tab-price'> { props.item.price }<span className='tab-span'>원</span> </h5>
        <p className='tab-icon'><span className='span-icon'>특가</span></p>
        {/* 특가는 상황에 따라 추가하는건데 어떻게 반복문 돌릴지? */}
        <p className='tab-review-num'><span className='reivew-star'>★</span> { props.item.reviewnum}</p>
        <p className='tab-review'>리뷰 { props.item.review}</p>
      </div>
  )
}


//오늘의 기획전
function Todayevent(props){
  return (
    <div className="col-md-4 evnet-card">
      <img className="event-img" src={process.env.PUBLIC_URL + '/eventimage/event' + (props.i+1) + '.jpg'}/>
      <h4 className='event-title'> { props.dayevent.title } </h4>
      <p className='event-content'> { props.dayevent.content } </p>
    </div>
  )
}





export default App;
