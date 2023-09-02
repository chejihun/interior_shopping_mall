import axios from 'axios';

export const fetchGetBestItems = async type => {
  const response = await axios.get('/api/product/getBestItems', {params: {type}});


  const transformedData = response.data.map(item => ({
    ...item,
    date: new Date(item.date)
  }));
  return transformedData;

  // return response.data;
};