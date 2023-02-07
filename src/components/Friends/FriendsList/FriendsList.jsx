import React from 'react';
import FriendsItem from '../FriendsItem/FriendsItem';

import { List } from './FriendsList.styled';

const FriendsList = ({ friends = [] }) => {
  // if (friends.length < 1) {
  //   return <p>Something went wrong...</p>;
  // }
  return (
    <List>
      {friends.map(item => {
        return <FriendsItem key={item._id} {...item} />;
      })}
    </List>
  );
};

export default FriendsList;
