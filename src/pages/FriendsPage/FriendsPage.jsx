import { useEffect, useState } from 'react';
import Headline from 'components/Headline/Headline';
import fetchFriends from './friendsFetch';
import FriendsList from 'components/Friends/FriendsList/FriendsList';
import { Wrapper } from './FriendsPage.styled';
import { Container, Main } from 'styles';

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
    <Main>
      <Container>
        <Wrapper>
          <Headline title={'Our friends'}></Headline>
          <FriendsList friends={friends} />
        </Wrapper>
      </Container>
    </Main>
  );
}

export default FriendsPage;
