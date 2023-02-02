import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ filteredPets }) => {
  return (
    <List>
      <NoticeCategoryItem filteredPets={filteredPets} />
    </List>
  );
};

export default NoticesCategoriesList;
