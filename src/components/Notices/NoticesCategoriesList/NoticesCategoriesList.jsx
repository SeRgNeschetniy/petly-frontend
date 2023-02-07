import NoticeCategoryItem from '../../Notices/NoticeCategoryItem/NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ route, notices }) => {
  return (
    <List>
      {notices.map(notice => (
        <NoticeCategoryItem key={notice._id} notice={notice} route={route} />
      ))}
    </List>
  );
};

export default NoticesCategoriesList;
