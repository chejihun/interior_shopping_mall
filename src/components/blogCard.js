import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchGetBlogItems } from '../api/blog.js';

function BlogCard() {

  const navigate = useNavigate();
  const { data: blogItems, error, isLoading } = useQuery('getBlogItems', fetchGetBlogItems);
  // console.log(data, error, isLoading)

  return (
    <div className="container tip-area">
      <h3 className='main-bl-title'>나만의 인테리어 꿀팁</h3>
      <p className='sub-bl-title'>나만의 멋스럽고 이쁜 홈인테리어 꿀팀 대방출</p>
      <a href="#" className='main-bl-link'> 더보기 - </a>
      <div className="row">
        {isLoading ? (
          <p>이미지 불러오는 중.</p>
        ) : blogItems ? (
          blogItems.map((blogCardInfo, i) => (
            <BlogCardForm key={i} blogCardInfo={blogCardInfo} onClick={() => { navigate('/') }} />
          ))
          ) : (
            <p>이미지를 불러오는데 실패하였습니다.</p>
          )}
      </div>
    </div>
  )
}

function BlogCardForm( {blogCardInfo} ) {

  return (
    <div className="col-md-4 tip-blog">
      <img className="blog-img" src={ blogCardInfo.src }/>
      <h4 className='blog-title'> { blogCardInfo.title } </h4>
      <p className='blog-content'> { blogCardInfo.subTitle } </p>
      <a href="#" className='blog-link'>자세히 알아보기  </a>
    </div>
  )
}

  export default BlogCard;