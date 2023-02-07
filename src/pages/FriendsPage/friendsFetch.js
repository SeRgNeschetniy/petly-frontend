import axios from 'axios';
const { REACT_APP_BASE_URL } = process.env;

const fetchFriends = async () => {
  const { data } = await axios.get(`${REACT_APP_BASE_URL}/api/friends`);
  return data;
};

export default fetchFriends;
