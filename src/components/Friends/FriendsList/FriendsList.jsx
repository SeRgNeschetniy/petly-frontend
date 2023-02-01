import React from 'react';

const FriendsList = ({ friends }) => {
  if (friends.length < 1) {
    return <p>Something went wrong...</p>;
  }
  return (
    <div>
      <ul>
        {friends.map(item => {
          return <li key={item._id} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
