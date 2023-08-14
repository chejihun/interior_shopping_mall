import categorySerchData from "../categorySerchData.js"; 

function CategoryProductSerch() {

  // 1. 카데고리 개수를 length를 이용하여 보여질 최대 개수를 지정
  const categoryProductArray = Array.from({ length: 8 }, (_, i) => i);
    
  return (
        <div className='main-cate'>
            <h3 className='main-cate-title'>카테고리별 상품 찾기</h3>
            <div className="cate-teb">
              {/* {
                [1,2,3,4,5,6,7,8].map((a, i)=>{
                  return(
                    <Category category={categorySerchData[i]} i={i}></Category>
                  )
                })
              } */}
              {categoryProductArray.map(i => (
                <Category category={categorySerchData[i]} i={i} key={i} />
              ))}
            </div>
          </div>
    )
}
function Category(props){
  // const Category = Hom
    return (
        <a href="#" className='cate-teb-link'>
          <img className="cate-img" src={process.env.PUBLIC_URL + '/categoryimage/category' + (props.i+1) + '.png'}/>
          <p className='cate-title'> { props.category.title } </p>
        </a>
    )
  }


export default CategoryProductSerch;

