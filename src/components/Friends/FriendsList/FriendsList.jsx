import React from 'react';
import FriendsItem from '../FriendsItem/FriendsItem';

const FriendsList = ({ friends }) => {
  if (friends.length < 1) {
    return <p>Something went wrong...</p>;
  }
  return (
    <div>
      <ul>
        {friends.map(item => {
          return <FriendsItem key={item._id} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
