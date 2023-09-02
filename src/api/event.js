import axios from 'axios';

export async function fetchGetEventItems() {
  const response = await axios.get('/api/event/getEventItems');
  // 최신 id 순으로 정렬
  const sortedData = response.data.sort((a, b) => a.id - b.id);
  return sortedData;
}


