
import { Navbar, Container, Nav, Button, Form  } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import HomeBestTab from '../HomeBestTab.js';
import { useQuery } from 'react-query'
import { fetchGetBestItems } from '../api/product.js'


function HomeBestProductTab() {
  let [categoryTab] = useState(HomeBestTab)
  const [tab, setTab] = useState('all');
  const navigate = useNavigate();

  return(
    <div className='tab-area'>
      <h3 className='main-tab-title'>베스트 인기상품</h3>
      <Nav variant="tabs" defaultActiveKey="link0" className="main-pro-tab">
        {
          categoryTab.map((categoryInfo, i) => {
            return(
              <CategoryTab i={i} setTab={setTab} type={categoryInfo.type} title={categoryInfo.title} />    
            )
          })
        }
      </Nav>
      <TabProduct tab={tab} />
    </div>
  )
    
function CategoryTab(props) {
  const setTab = props.setTab 
      
  return ( 
    <Nav.Item className='tab-nav'>
      <Nav.Link id="tab-link" classNam='tab-link' onClick={()=>
      { setTab(props.type) }} eventKey={`link${props.i}`} type={props.type}>
        { props.title }
      </Nav.Link>
    </Nav.Item>
  )
}     
   
function TabProduct(props) {
  const {data, error, isLoading} = useQuery('getBestItems', () => fetchGetBestItems(props.tab))
  // console.log(data, error, isLoading);

  return (
    <div className='row'>
      {!isLoading && data.map((item, index) => {
        return <TabAlignItem item={item} i={index}  onClick={()=>{ navigate('/detail') }} />
      })}
    </div>
  )
}
      
      
function TabAlignItem(props) {
  const sale = props.item.sale * 100
  const consumerPrice = Math.round(props.item.price * props.item.sale / 100) * 100;
        
  return(
    <Nav.Link className="col-md-3 tab-product" onClick={()=>{ navigate('/detail') }} >
      <img className="tab-img" src={ props.item.src }/>
      <h4 className='tab-title'> { props.item.title } </h4>
      <h5 className='tab-sale'> { sale }<span className='tab-span'>%</span> </h5>
      <h5 className='tab-price'> { consumerPrice }<span className='tab-span'>원</span> </h5>
      <p className='tab-icon'><span className='span-icon'>특가</span></p>
      <p className='tab-review-num'><span className='reivew-star'>★</span> { props.item.reviewNum}</p>
      <p className='tab-review'>리뷰 { props.item.review}</p>
    </Nav.Link>
  )
}

};


export default HomeBestProductTab;