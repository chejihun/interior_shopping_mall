import './SlideBanner.css'




function SlideBanner() {
    
   
    

    return (
        <div className="main-bg ">
            <div className="slide-a" >
                <div className='slide-img' >
                    
                    <img src={process.env.PUBLIC_URL + 'barimg1.jpg'} className='slide-img1' />
                    
                    <div class="slide-txt">
                        <span class="p1 txt-small">Interior Chair
                        </span>
                        <span class="p2 txt-big">감성적인 디자인
                        </span>
                        <span class="p3 txt-big">실용성과 인테리어를 동시에
                        </span>
                        <span class="p4 txt-bt">전체상품보기
                        </span>
		            </div>
                </div>
            </div>
            
            {/* //슬라이드 위치 버튼 */}

            <div className='slide-btn'>
                <div className='sbtn sabtn'></div>
                <div className='sbtn'></div>
                <div className='sbtn'></div>
            </div>

             {/* //슬라이드 좌우 버튼 */}

             <div className='prev-btn'>
                <div className='prev-left'></div>
                <div className='prev-right'></div>
            </div>


        </div>
        
       
    
    )
}




    
    
    
  


export default SlideBanner;