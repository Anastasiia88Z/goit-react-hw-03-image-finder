import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

const keyApi = '22624539-3e01f7ad519f43f5fb2c3ff3f';

export const fetchPictures = async (pictureName, page) => {
  const {
    data: { hits },
  } = await axios.get(`/api/?q=${pictureName}&page=${page}&key=${keyApi}`);
  return hits;
};
