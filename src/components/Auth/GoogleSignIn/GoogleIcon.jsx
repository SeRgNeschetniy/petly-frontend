import { IconWrapper, IconLink, GoogleIconStyle } from './GoogleIcon.styled';

const { REACT_APP_BASE_URL } = process.env;

export default function GoogleIcon() {
  return (
    <IconWrapper>
      <IconLink href={`${REACT_APP_BASE_URL}/users/google`} target="_self">
        <GoogleIconStyle
          src={require('images/auth/google.png')}
          alt="google-sign-in"
        />
      </IconLink>
    </IconWrapper>
  );
}
