import { TbLogout } from 'react-icons/tb';
import { LeaveButton, Box } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operation';
import { Navigate } from 'react-router';

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    return <Navigate to="/login" />;
  };

  return (
    <Box>
      <LeaveButton type="button" onClick={handleLogOut} variant="outlined">
        <TbLogout style={{ color: '#F59256', height: '18px', width: '18px' }} />
        Log out
      </LeaveButton>
    </Box>
  );
}
