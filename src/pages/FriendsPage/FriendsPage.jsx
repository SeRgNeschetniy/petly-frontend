import Headline from 'components/Headline/Headline';
import FriendsList from 'components/Friends/FriendsList/FriendsList';
import { useCallback, useEffect, useState } from 'react';

const URL = 'http://localhost:4000';

function FriendsPage() {
  const [friends, setFriends] = useState([]);

  const fetchFriends = useCallback(async () => {
    try {
      const response = await fetch(`${URL}/api/friends`);
      const data = await response.json();
      console.log(data);

      setFriends(data);
    } catch (error) {
      console.log(error);
    }

    fetchFriends();
  }, []);

  //   useEffect(() => {
  //     fetchFriends();
  //     console.log(friends);
  //   }, [friends, fetchFriends]);

  return (
    <>
      <Headline title={'Our friends'}></Headline>
      <FriendsList friends={friends} />
    </>
  );
}

export default FriendsPage;
