import axios from 'axios';

axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

const fetchFriends = async () => {
  const { data } = await axios.get('/friends');
  return data;
};

export default fetchFriends;
