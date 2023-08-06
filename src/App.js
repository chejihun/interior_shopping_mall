import { clear } from '@testing-library/user-event/dist/clear';
import { Navbar, Container, Nav, Button, Form  } from 'react-bootstrap';
import { useState } from 'react';
import blogdata from './mytipdata.js';
import eventdata from './eventdata.js';
import categorydata from './categorydata.js'; // 카테고리
import tabdata from './catetebdata.js';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import bedDataList from './beddata.js';
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
  const [tab, setTab] = useState(0)



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
                [1,2,3,4,5,6,7,8,9].map((a, i)=>{
                  return(
                    <Categorytab categorytab={categorytab[i]} i={i} setTab={setTab}></Categorytab>
                  )
                })
              }
            </Nav>
            <TabProduct tab={tab}>
            
            </TabProduct>

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

        

        <Route path="/detail" element={<div>대충 서브페이지 여기는 카테고리 중 하나 넣을 것</div>}/>
      
      </Routes>
      
      {/* // 마지막 고정영역 푸ㅌ뤄 영역 */}
      {/* 네비와 푸터는 고정이기에 라우츠는 그 사이에 지정 */}
      
      <footer className='footer'>
        <div>여기가 바로 푸터다</div>
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

// 베스트 인기 상품
function Categorytab(props){
  const setTab = props.setTab 
  return ( 
    <Nav.Item className='tab-nav'>
      <Nav.Link id="tab-link" classNam='tab-link' onClick={()=>{ setTab(props.i) }} eventKey={`link${props.i}` }>{ props.categorytab.title }</Nav.Link>

    </Nav.Item>
  )
}



function TabProduct(props){
  // const mytip = props.mytip 

  function getDataList(tab) {
    if (tab === 0) {
      return '탭0번데이터리스트'
    } else if (tab === 1) {
      return bedDataList
    } else if (tab === 2) {
      return 'sofaDataList'
    }

  }

  const tabDataList = getDataList(props.tab)

  return (
    <div className='row'>
      {tabDataList.filter((data, index) => {
        const viewLimit = 8
        return index < viewLimit
      }).map((item, index) => {
        return <TabAlignItem item={item} i={index}/>
      })}
    </div>
  )

 
  // if (props.tab === 0){
  //    return <Test/>
  // }
  // if (props.tab  === 1){
  //   const tabDataList = bedDataList
    
  //   return (
  //     <div className='row'>
  //       {tabDataList.filter((data, index) => {
  //         return index < 8
  //       }).map((data, index) => {
  //         return <TabAlignItem tabbed={data} i={index}/>
  //       })}
  //     </div>
  //   )
    
  // }
  // if (props.tab  === 2){
  //   return <div>소파반복문 자리</div>
  // }
  // if (props.tab  === 3){
  //   return <div>수납반복문 자리</div>
  // }
  // if (props.tab  === 4){
  //   return <div>조명반복문 자리</div>
  // }
  // if (props.tab  === 5){
  //   return <div>패브릭반복문 자리</div>
  // }
  // if (props.tab  === 6){
  //   return <div>가전반복문 자리</div>
  // }
  // if (props.tab  === 7){
  //   return <div>주방반복문 자리</div>
  // }
  // if (props.tab  === 8){
  //   return <div>공구반복문 자리</div>
  // }
}

//전체 자리는 아래 제품들이 섞여 있는거일텐데 어떻게 구성할지?

//이걸 어떻게 위에 자리에 div대신 넣어야 하는지?
//각 useParams를 이용해서 정렬시 id로 고유 순서 안바뀌게 할것
//클릭시 데이터 파일로 이동해야하는데 onclick을 어디에 걸어야하는지?

function TabAlignItem(props){
  return(
    <div className="col-md-3 tab-product" >
      <img className="tab-img" src={process.env.PUBLIC_URL + '/tabimage/bed' + (props.i+1) + '.jpg'}/>
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
