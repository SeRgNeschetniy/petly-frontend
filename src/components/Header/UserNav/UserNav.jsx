import { UserLinks } from './UserNav.styled';
import { MdAccountCircle } from 'react-icons/md';

export default function UserNav({ title = 'Account', showContent }) {
  return (
    <UserLinks
      onClick={() => {
        showContent();
      }}
      to={'/user'}
    >
      <MdAccountCircle />
      {title}
    </UserLinks>
  );
}
