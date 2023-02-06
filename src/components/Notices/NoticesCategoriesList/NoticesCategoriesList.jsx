import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';
import {
  useSelector,
  // useDispatch
} from 'react-redux';
import { selectNotices } from 'redux/notices/notices-selectors';
// import { deleteNotice } from 'redux/notices/notices-operation';
// import { selectIsLogin } from 'redux/auth/auth-selectors';

const NoticesCategoriesList = ({ route, notices }) => {
  //const notices = useSelector(selectNotices);
  //const noticeFavoreite = useSelector(selectFaNotices);

  // const isLoggedIn = useSelector(selectIsLogin);

  return (
    <List>
      {notices.map(notice => (
        <NoticeCategoryItem key={notice._id} notice={notice} route={route} />
      ))}
    </List>
  );
};

export default NoticesCategoriesList;
