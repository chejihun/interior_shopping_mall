import blogCardData from "../blogCardData"

function BlogCard(){

    // const blogCardArray = Array.from({ length: 3 }, (_, i) => i);
    

    return (
        <div className="container tip-area">
        <h3 className='main-bl-title'>나만의 인테리어 꿀팁</h3>
        <p className='sub-bl-title'>나만의 멋스럽고 이쁜 홈인테리어 꿀팀 대방출</p>
        <a href="#" className='main-bl-link'> 더보기 - </a>
        <div className="row">
          {/* {
            [1,2,3].map((a, i)=>{
              return(
                <BlogCardForm mytip={blogCardData[i]} i={i}></BlogCardForm>
              )
            })
          } */}
          {/* {
            blogCardArray.map(i => (
            <BlogCardForm mytip={blogCardData[i]} i={i} key={i} />
          ))} */}
          {
            blogCardList.map((a, i) => {
            return <BlogCardForm blogCardInfo={blogCardData[i]} i={i} a={a.date}/>
          }) 
          }
        </div>
      </div>
    )
}

function BlogCardSort() {
  //1. filter 최신 날짜에따라 순차정렬
  //2. 3개만 보이게
  const BlogDataList = blogCardData.sort((a, b) => {
    return b.date - a.date
  })
  const threeDataList = BlogDataList.slice(0,3)
  return  threeDataList
}

const blogCardList= BlogCardSort(blogCardData)  


  

function BlogCardForm(props) {
  return (
    <div className="col-md-4 tip-blog">
      <img className="blog-img" src={ props.blogCardInfo.src }/>
      <h4 className='blog-title'> { props.blogCardInfo.title } </h4>
      <p className='blog-content'> { props.blogCardInfo.content } </p>
      <a href="#" className='blog-link'>자세히 알아보기  </a>
    </div>
  )
}

  

 




  export default BlogCard;