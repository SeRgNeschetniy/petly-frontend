import Headline from 'components/Headline/Headline';
import FriendsList from 'components/Friends/FriendsList/FriendsList';
import { useCallback, useEffect, useState } from 'react';

const { REACT_APP_BASE_URL } = process.env;

// const fetchFriends = async () => {
//   const response = await fetch(`${REACT_APP_BASE_URL}api/friends`);
//   return await response.json();
// };

function FriendsPage() {
  const [friends, setFriends] = useState([]);

  const fetchFriends = useCallback(async () => {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}api/friends`);
      const data = await response.json();
      setFriends(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchFriends();
  }, [fetchFriends]);

  console.log(friends);

  return (
    <>
      <Headline title={'Our friends'}></Headline>
      <FriendsList friends={friends} />
    </>
  );
}

export default FriendsPage;
