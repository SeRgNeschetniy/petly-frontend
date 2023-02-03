import Headline from 'components/Headline/Headline';
import FriendsList from 'components/Friends/FriendsList/FriendsList';
import { useEffect, useState } from 'react';
import { Container } from 'styles';

const { REACT_APP_BASE_URL } = process.env;

const fetchFriends = async () => {
  const response = await fetch(`${REACT_APP_BASE_URL}/api/friends`);
  return await response.json();
};

function FriendsPage() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const data = await fetchFriends();
        setFriends(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, []);

  // console.log(friends);

  return (
    <Container>
      <Headline title={'Our friends'}></Headline>
      <FriendsList friends={friends} />
    </Container>
  );
}

export default FriendsPage;
