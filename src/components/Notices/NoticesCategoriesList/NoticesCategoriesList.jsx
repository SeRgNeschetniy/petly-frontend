import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectNotices } from 'redux/notices/notices-selectors';

const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);
  return (
    <List>
      <NoticeCategoryItem items={notices} />
    </List>
  );
};

export default NoticesCategoriesList;
