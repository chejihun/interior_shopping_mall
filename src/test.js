


function Test(){
    return(
       
    <div className="col-md-3 tab-product" >
        <img className="tab-img" src={process.env.PUBLIC_URL + '/tabimage/bed1.jpg'}/>
        <h4 className='tab-title'> asd </h4>
        <h5 className='tab-sale'> asd<span className='tab-span'>%</span> </h5>
        <h5 className='tab-price'> asd<span className='tab-span'>원</span> </h5>
        <p className='tab-icon'><span className='span-icon'>특가</span></p>
        {/* 특가는 상황에 따라 추가하는건데 어떻게 반복문 돌릴지? */}
        <p className='tab-review-num'><span className='reivew-star'>★</span> 0</p>
        <p className='tab-review'>리뷰 0</p>
    </div>
        
    )
}

export default Test;