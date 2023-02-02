import React from 'react';
import { Item, Heading, InfoWrapper, TextField } from './FriendsItem.styled';

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
    <Item>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Heading>{title}</Heading>
      </a>

      <InfoWrapper>
        <img src={imageUrl} alt={title} />

        <ul>
          <TextField>
            Time: <br />
            {/* {workDays} */}
          </TextField>
          <TextField>
            Address: <br />
            {address ? (
              <a href={addressUrl}>{address}</a>
            ) : (
              <span>----------</span>
            )}
          </TextField>
          <TextField>
            Email: <br />
            {email ? (
              <a href={`mailto: ${email} `}>{email}</a>
            ) : (
              <span>----------</span>
            )}
          </TextField>
          <TextField>
            Phone: <br />
            {phone ? (
              <a href={`tel: ${phone} `}>{phone}</a>
            ) : (
              <span>----------</span>
            )}
          </TextField>
        </ul>
      </InfoWrapper>
    </Item>
  );
};

export default FriendsItem;
