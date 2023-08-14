import eventData from '../eventdata.js';

function HomeTodayEvent() {
    return (
        <div className="container event-area">
            <h3 className='main-event-title'>오늘의 기획전</h3>
            <a href="#" className='main-envet-link'> 더보기 - </a>
            <div className="row">
              {
                [1,2,3].map((a, i)=>{
                  return(
                    <EventBanner dayevent={eventData[i]} i={i}></EventBanner>
                  )
                })
              }
            </div>
        </div>
    )
}

function EventBanner(props){
    return (
      <div className="col-md-4 evnet-card">
        <img className="event-img" src={process.env.PUBLIC_URL + '/eventimage/event' + (props.i+1) + '.jpg'}/>
        <h4 className='event-title'> { props.dayevent.title } </h4>
        <p className='event-content'> { props.dayevent.content } </p>
      </div>
    )
  }

  export default HomeTodayEvent;