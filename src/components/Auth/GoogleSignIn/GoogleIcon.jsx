import { IconWrapper, IconLink, GoogleIconStyle } from "./GoogleIcon.styled";

export default function GoogleIcon() {
  return (
    <IconWrapper>
      <IconLink href="" target="_blank">
        <GoogleIconStyle src={require('images/google.png')} alt="google-sign-in"/>
      </IconLink>
    </IconWrapper>
  )
}
