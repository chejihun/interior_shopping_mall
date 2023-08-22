import '../productDetailPage.css';
import { useParams } from 'react-router-dom';
import { Navbar, Container, Nav, Button, Form  } from 'react-bootstrap';

function ProductDetailPage() {

    // const {id} = useParams();
    // console.log(id);

    return (
        <>

        <div className='productpage-area'>
            {/* //제품 카테고리마다 타입 자리가 변해야함 */}
            <h6 className='product-cate-type'>홈&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;카테고리&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;타입자리</h6>

            {/* //메인이미지는 아래 서브 이미지 클릭시 보여져야하며, 기본 1번으로 셋팅 */}
            <div className='product-img-area'>
                <div className='product-main-img'>1</div>
                <div className='product-sub-img'>1</div>
                <div className='product-sub-img'>2</div>
                <div className='product-sub-img'>3</div>
                <div className='product-sub-img'>4</div>
                <div className='product-sub-img'>5</div>
            </div>

            {/* //제품 인포영역에는 각 제품별 type과 id에 맞쳐 내용을 가져와야함 */}
            <div className='product-info-area'>
                <div className='info-product'>
                    <div className='info-product-frist'>
                        {/* //어떤 제품이 와도 변하지 않는 고정값 */}
                        <h5 className='info-product-title'>상품명</h5>
                        <h5 className='info-con'>상품요약정보</h5>
                        <h5 className='info-con'>소비자가</h5>
                        <h5 className='info-product-price'>판매가</h5>
                        <p className='info-fixd'>국내·해외배송</p>
                        <p className='info-fixd'>배송비</p>
                    </div>
                    <div className='info-product-second'>
                        {/* //타입별 제품 정보에 따라 변하는 값 */}
                        <h5 className='info-product-title'>타입에 맞는 제품 이름 - title </h5>
                        <h5 className='info-con'>타입에 맞는 제품 정보 - content </h5>
                        <h5 className='info-con'>타입에 맞는 제품 정보 - consumer </h5>
                        <h5 className='info-product-price'>타입에 맞는 제품 정보 - price </h5>
                        <p className='info-fixd'>국내배송</p>
                        <p className='info-fixd'>2,500원(50,000원이상 구매시 무료배송)</p>
                    </div>
                </div>
                <div className='info-size'>
                    <div className='info-product-frist' >
                        <h5 className='info-con info-size-h5'>사이즈</h5>
                    </div>
                    <div className='info-product-second'>
                        <div className='check-size-box'>S</div>
                        <div className='check-size-box'>M</div>
                        <div className='check-size-box'>L</div>
                    </div>
                    <div  className='info-product-second'>
                        <p className='info-fixd info-option'>[필수] 옵션을 선택해주세요.</p>
                    </div>
                </div>
                <div className='info-color'>
                    <div className='info-product-frist' >
                        <h5 className='info-con info-color-h5'>컬러</h5>
                    </div>
                    <div className='info-product-second'>
                        <div className='check-color-box'></div>
                        <div className='check-color-box'></div>
                        <div className='check-color-box'></div>
                    </div>
                    <div  className='info-product-second'>
                        <p className='info-fixd info-option'>[필수] 옵션을 선택해주세요.</p>
                    </div>
                </div>
                <div className='info-notice'>
                    <p>(최소 주문수량 1개이상)</p>
                    <p>위 제품에 맞는 옵션을 선택하시면 아래 상품이 추가됩니다.</p>
                </div>
                <div className='info-price'>
                    <h5>총 주문금액(수량) : <span className='final-pirce'> 0원 </span>(0개)</h5>
                </div>
                <div className='info-btn'>
                    <button className='buy-btn'>바로 구매하기</button>
                    <button className='shop-btn'>장바구니 담기</button>
                    <button className='interst-btn'>관심상품 등록</button>
                    
                </div>
            </div>
            <div className='clear'></div>
        </div>

      

        {/* // 제품 정보 영역 */}
        <div className='productpage-info-area'>
            {/* //관련상품 작게 4-6개정도 보여줄곳 */}
            <div className='productpage-recommend'>
                <h4 className='productpage-recommend-title'>[ 구매자들이 함께 본 상품 ]</h4>

                {/* //반복문 돌릴 예정 */}
                <div>
                
                <Nav.Link className='col-sm-2 recommend-product'>
                    <img src=""></img>
                    <h6>제품 이름 타이틀</h6>
                    <p>180,000</p>
                </Nav.Link>
                
                <div className='clear'></div>
                </div>
                
            </div>


            <div className='prduct-four-tab'>
                <a class="prduct-four-info-tab col-sm-3" href="#first">상품상세정보</a>
                <a class="prduct-four-info-tab col-sm-3" href="#second">상품구매안내</a>
                <a class="prduct-four-info-tab col-sm-3" href="#third">상품사용후기</a>
                <a class="prduct-four-info-tab col-sm-3" href="#four">상품문의</a>
            </div>
            <div className='clear'></div>

            {/* 제품 5가지 순차 영역 */}
            <div className='prduct-five-info'>

                {/* //상품상세 정보 */}
                <div className='productpage-info'   id="first">
                    <p>[ 상품상세정보 ]</p>
                    <div className='product-test-img's>
                        [ 상세페이지 등록영역 ] <br/>
                        가로 영역 최대 사이즈는 가로 1200px까지 사용가능<br/>
                        현재 세로 영역은 600px
                    </div>
                </div>

                {/* // 상품구매안내 */}
                <div className='productpage-info productpage-info-second'  id="second">
                    <p>[ 상품구매안내 ]</p>
                    <h6 className='product-second-title'>상품결제정보</h6>
                    <p className='product-second-subtitle'>- 고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.</p>
                    <p className='product-second-subtitle'>- 무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.  </p>
                    <p className='product-second-subtitle'>- 주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.</p>
                    <h6 className='product-second-title'>배송정보</h6>
                    <p className='product-second-subtitle'>- 배송 방법 : 택배<br/>
                        - 배송 지역 : 전국지역<br/>
                        - 배송 비용 : 무료<br/>
                        - 배송 기간 : 3일 ~ 7일<br/>
                        - 배송 안내 : - 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.<br/>
                        &nbsp;&nbsp;고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서 상품의 &배송이 다소 지연될 수 있습니다.
                    </p >
                    <h6 className='product-second-title'> 교환 및 반품정보</h6>
                    <h6 className='product-second-title'>· 교환 및 반품이 가능한 경우</h6>
                    <p className='product-second-subtitle'>- 상품을 공급 받으신 날로부터 7일이내 단, 가전제품의 경우 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이 불가능합니다.</p>
                    <p className='product-second-subtitle'>- 공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나 다르게 이행된 경우에는 공급받은 날로부터 3월이내, 그사실을 알게 된 날로부터 30일이내</p>
                    <h6 className='product-second-title'>· 교환 및 반품이 불가능한 경우</h6>
                    <p className='product-second-subtitle'>- 고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외</p>
                    <p className='product-second-subtitle'>- 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우</p>
                    <p className='product-second-subtitle'>- 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 단, 화장품등의 경우 시용제품을 제공한 경우에 한 합니다.</p>
                    <p className='product-second-subtitle'>- 시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히 감소한 경우</p>
                    <p className='product-second-subtitle'>- 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야 합니다.(색상 교환, 사이즈 교환 등 포함)</p>
                </div>

                 {/* //상품사용 후기 */}
                 <div className='productpage-info productpage-info-third' id="third">
                    <p>[ 상품사용후기 ]</p>
                    <div className='product-review'>
                        [ 게시판을 어떻게 꾸며야 할까나? 일단 패스 하자구 :D ] <br/>

                    </div>
                </div>

                {/* //상품문의 */}
                <div className='productpage-info productpage-info-four' id="four">
                    <p>[ 상품문의QnA ]</p>
                    <div className='product-review'>
                        [ 게시판을 어떻게 꾸며야 할까나? 일단 패스 하자구 :D ] <br/>
                    </div>
                </div>

            </div>
        </div>
        
        
        </>


    // function RecommendedProduct() {
    //     return(
    //         //1. 제품과 같은 tpye의 제품데이터를 가져오기
               //2. 불러온 제품을 id 순으로 5개 보여주기
    //     )
    // };



    )

}







export default ProductDetailPage;