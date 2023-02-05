import React from 'react';
import defaultImage from '../../../images/friends/defaultImage.jpg';
import WorkHours from './WorkHours';
import {
  Item,
  Heading,
  InfoWrapper,
  TextList,
  TextField,
} from './FriendsItem.styled';

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
        {imageUrl ? (
          <img src={imageUrl} alt="logo" />
        ) : (
          <img src={defaultImage} alt="logo" />
        )}

        <TextList>
          <TextField>
            Time: <br />
            {workDays ? (
              <WorkHours workDays={workDays} />
            ) : (
              <span>-------------</span>
            )}
          </TextField>

          <TextField>
            Address: <br />
            {address ? (
              <a href={addressUrl}>{address}</a>
            ) : (
              <span>-------------</span>
            )}
          </TextField>
          <TextField>
            Email: <br />
            {email ? (
              <a href={`mailto: ${email} `}>{email}</a>
            ) : (
              <span>-------------</span>
            )}
          </TextField>
          <TextField>
            Phone: <br />
            {phone ? (
              <a href={`tel: ${phone} `}>{phone}</a>
            ) : (
              <span>-------------</span>
            )}
          </TextField>
        </TextList>
      </InfoWrapper>
    </Item>
  );
};

export default FriendsItem;
