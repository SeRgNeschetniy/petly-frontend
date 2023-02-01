import { TbLogout} from "react-icons/tb";      
import {LeaveButton, Box} from './Logout.styled';
import { userLogOut } from '../../../redux/userpage/userpage-operation';
import { useDispatch} from 'react-redux';


   

export default function Logout() {
     const dispatch = useDispatch();
    //   const isLoggedIn = useSelector(selectIsLoggedIn);
    //   const nameUser = useSelector(selectUserData);

    const handleLogOut = () => {
        dispatch(userLogOut());
    };

    return (
        <Box>
            <LeaveButton
                type="button"
                onClick={handleLogOut}
                variant="outlined">
            <TbLogout style={{ color: "#F59256", height: "18px", width: "18px" }} />
            Log out
            </LeaveButton>
        </Box>
    )
}
