import { UserLinks } from './UserNav.styled';
import { MdAccountCircle } from 'react-icons/md';

export default function UserNav({ title = 'Account', showContent }) {
  return (
    <UserLinks
      onClick={() => {
        showContent();
        console.log('first');
      }}
      to={'/user'}
    >
      <MdAccountCircle />
      {title}
    </UserLinks>
  );
}
