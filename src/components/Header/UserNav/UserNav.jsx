import { UserLinks } from './UserNav.styled';
import { MdAccountCircle } from 'react-icons/md';

export default function UserNav({ title = 'Account' }) {
  return (
    <UserLinks to={'/user'}>
      <MdAccountCircle />
      {title}
    </UserLinks>
  );
}
