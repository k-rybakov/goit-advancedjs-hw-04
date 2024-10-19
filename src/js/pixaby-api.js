import axios from 'axios';

const API_KEY = '46595178-4dac5182a4d6048d037515019';
const url = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

export const findPhotos = async (search, page) => {
  const params = {
    key: API_KEY,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page: page,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (e) {
    console.log(e); // debug
    throw new Error(e.response?.data?.message || 'API request failed'); // user error
  }
};
