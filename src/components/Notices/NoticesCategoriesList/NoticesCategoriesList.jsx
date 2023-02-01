import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ pets }) => {
  return (
    <List>
      <NoticeCategoryItem pets={pets} />
    </List>
  );
};

export default NoticesCategoriesList;
