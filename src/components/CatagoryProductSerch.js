import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchGetCategorySearchItems } from '../api/categorySearch.js';

function CategoryProductSerch() {
  const navigate = useNavigate();
  const { data: categorySearchItems, error, isLoading } = useQuery('getCategorySearchItems', fetchGetCategorySearchItems);
    
  return (
    <div className='main-cate'>
      <h3 className='main-cate-title'>카테고리별 상품 찾기</h3>
      <div className="cate-teb">
        {isLoading ? (
          <p>이미지 불러오는 중.</p>
        ) : categorySearchItems ? (
          categorySearchItems.map((category, i) => (
            <Category key={i} category={category} onClick={() => { navigate('/') }} />
          ))
          ) : (
            <p>이미지를 불러오는데 실패하였습니다.</p>
          )}
      </div>
    </div>
  )
}

function Category( {category} ) {
  return (
    <a href="#" className='cate-teb-link'>
      <img className="cate-img" src={ category.src }/>
      <p className='cate-title'> { category.title } </p>
    </a>
  )
}


export default CategoryProductSerch;

