import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import { fetchGetEventItems } from '../api/event.js'

function HomeTodayEvent() {
  const { data: eventItems, error, isLoading } = useQuery('getBlogItems', fetchGetEventItems);
  
  return (
    <div className="container event-area">
      <h3 className='main-event-title'>오늘의 기획전</h3>
      <a href="#" className='main-envet-link'> 더보기 - </a>
      <div className="row">
        {isLoading ? (
          <p>이미지 불러오는 중.</p>
        ) : eventItems ? (
          eventItems.map((dayevent, i) => (
            <EventBanner key={dayevent.id} dayevent={dayevent} />
          ))
        ) : (
          <p>이미지를 불러오는데 실패하였습니다.</p>
        )}
      </div>
    </div>
  )
}

function EventBanner(props) {
  return (
    <div className="col-md-4 evnet-card">
      <img className="event-img" src={props.dayevent.src} />
      <h4 className='event-title'> {props.dayevent.title} </h4>
      <p className='event-content'> {props.dayevent.subTitle} </p>
    </div>
  )
}

export default HomeTodayEvent;