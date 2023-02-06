const { REACT_APP_BASE_URL } = process.env;

const fetchFriends = async () => {
  const response = await fetch(`${REACT_APP_BASE_URL}api/friends`);
  return await response.json();
};

export default fetchFriends;
