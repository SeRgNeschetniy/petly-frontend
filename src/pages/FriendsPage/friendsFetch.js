import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = REACT_APP_BASE_URL;

const fetchFriends = async () => {
  const { data } = await axios.get('/friends');
  return data;
};

export default fetchFriends;
