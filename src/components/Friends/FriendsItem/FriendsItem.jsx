import React from 'react';

const FriendsItem = ({
  address,
  addressUrl,
  email,
  phone,
  imageUrl,
  title,
  url,
  workDays,
}) => {
  return (
    <li>
      <a href={url}>
        <h3>{title}</h3>
      </a>

      <div>
        <img src={imageUrl} alt={title} />
        <div></div>
      </div>
    </li>
  );
};

export default FriendsItem;
