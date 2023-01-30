import { NavLink, Nav } from "./NoticesCategoriesNav.styled";


const NoticesCategoriesNav = () => {
    return (
        <Nav>
            <NavLink to='/sell'>sell</NavLink>
            <NavLink to='/lost-found'>lost/found</NavLink>
            <NavLink to='/for-free'>in good hands</NavLink>

            
            {/* если пользователь авторизированный */}
            {/* <NavLink to='favorite'>favorite ads</NavLink>
            <NavLink to='own'>my ads</NavLink> */}

        </Nav>
    )
}

export default NoticesCategoriesNav;