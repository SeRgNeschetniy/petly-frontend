import React from 'react';
import defaultImage from '../../../images/friends/defaultImage.jpg';
import WorkHours from './WorkHours';
import {
  Item,
  Heading,
  InfoWrapper,
  TextList,
  TextField,
  Contact,
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
            {workDays?.length > 0 ? (
              <WorkHours workDays={workDays} />
            ) : (
              <span>-------------</span>
            )}
          </TextField>

          <TextField>
            Address: <br />
            <Contact>
              {address ? (
                <a href={addressUrl} target="_blank" rel="noopener noreferrer">
                  {address}
                </a>
              ) : (
                <span>-------------</span>
              )}
            </Contact>
          </TextField>
          <TextField>
            Email: <br />
            <Contact>
              {email ? (
                <a href={`mailto: ${email} `}>{email}</a>
              ) : (
                <span>-------------</span>
              )}
            </Contact>
          </TextField>
          <TextField>
            Phone: <br />
            <Contact>
              {phone ? (
                <a href={`tel: ${phone} `}>{phone}</a>
              ) : (
                <span>-------------</span>
              )}
            </Contact>
          </TextField>
        </TextList>
      </InfoWrapper>
    </Item>
  );
};

export default FriendsItem;
