import { IconWrapper, IconLink, GoogleIconStyle } from './GoogleIcon.styled';

export default function GoogleIcon() {
  return (
    <IconWrapper>
      <IconLink
        href={`https://petly-backend-vopf.onrender.com/api/users/google`}
        target="_self"
      >
        <GoogleIconStyle
          src={require('images/auth/google.png')}
          alt="google-sign-in"
        />
      </IconLink>
    </IconWrapper>
  );
}
