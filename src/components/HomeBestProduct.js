
import { Navbar, Container, Nav, Button, Form  } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import shopDataList from '../shopDataList.js';
import HomeBestTab from '../HomeBestTab.js';

function HomeBestProductTab() {
    let [categoryTab] = useState(HomeBestTab)
    const [tab, setTab] = useState('all');
    const navigate = useNavigate();

    return(
        <div className='tab-area'>
            <h3 className='main-tab-title'>베스트 인기상품</h3>
            <Nav variant="tabs" defaultActiveKey="link0" className="main-pro-tab">
            
               {
                categoryTab.map((categoryInfo, i)=>{
                  return(
                    <CategoryTab i={i} setTab={setTab} type={categoryInfo.type} title={categoryInfo.title}
                    ></CategoryTab>    
                  )
                })
              }
            </Nav>
            <TabProduct tab={tab}  />
          </div>
    )
    function CategoryTab(props){
        // console.log(props)
        const setTab = props.setTab 
      
        return ( 
          <Nav.Item className='tab-nav'>
            <Nav.Link id="tab-link" classNam='tab-link' onClick={()=>{ 
              setTab(props.type) }}
            eventKey={`link${props.i}`} type={props.type} 
            > { props.title }</Nav.Link>
      
          </Nav.Item>
        )
      } 
      
      
      //탭 큰데이터 영역
      //여기서 데이터 리스트를 타입별로 불러오고
      function TabProduct(props){
        function getBestDataList(tabTarget, shopDataList) {
          // 1, filter  TYPE따라서  (0)
          // 2. 순차정렬 review
          // 3. 8개까지만 보이게 
          const filteredDataList = shopDataList.filter(data => {
            if(tabTarget === 'all') {
              return true;
            } else {
              return data.type === tabTarget
            }
          })
      
          const sortedDataList = filteredDataList.sort((a, b) => {
            if (b.review === a.review) {
              return b.reviewnum - a.reviewnum 
            } else {
              return b.review - a.review
            }
          })
          
      
          const eightDataList = sortedDataList.slice(0,8)
      
          return eightDataList
        }
        
        const bestDataList = getBestDataList(props.tab, shopDataList)
      
        return (
          <div className='row'>
            {bestDataList.map((item, index) => {
              return <TabAlignItem item={item} i={index} onClick={()=>{ navigate('/detail') }}/>
            }) 
            }
          </div>
        )
      }
      
      
      function TabAlignItem(props){
        return(
            <Nav.Link className="col-md-3 tab-product" onClick={()=>{ navigate('/detail') }} >
              {/* <img className="tab-img" src={process.env.PUBLIC_URL + '/tabimage/bed' + (props.i+1) + '.jpg'}/> */}
              <img className="tab-img" src={ props.item.src }/>
              <h4 className='tab-title'> { props.item.title } </h4>
              <h5 className='tab-sale'> { props.item.sale }<span className='tab-span'>%</span> </h5>
              <h5 className='tab-price'> { props.item.price }<span className='tab-span'>원</span> </h5>
              <p className='tab-icon'><span className='span-icon'>특가</span></p>
              {/* 특가는 상황에 따라 추가하는건데 어떻게 반복문 돌릴지? */}
              <p className='tab-review-num'><span className='reivew-star'>★</span> { props.item.reviewnum}</p>
              <p className='tab-review'>리뷰 { props.item.review}</p>
            </Nav.Link>
        )
      }
}


export default HomeBestProductTab;