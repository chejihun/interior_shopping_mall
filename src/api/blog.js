import axios from 'axios';

export const fetchGetBlogItems = async () => {
  const response = await axios.get('/api/blog/getBlogItems');

  const transformedData = response.data.map(item => ({
    ...item,
    date: new Date(item.date)
  }));
  return transformedData;
};