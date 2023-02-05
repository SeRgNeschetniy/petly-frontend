import { Text, AddBtn, Wrapper, IconAdd } from './AddNoticeButton.styled';
import useModal from '../../../hooks/modal';
import Modal from 'components/Modal';
import NoticeModal from '../../NoticeModal/NoticeModal';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const AddNoticeButton = () => {
  const isLogined = useSelector(selectIsLogin);
  const { isModalOpen, closeModal, toggleModal } = useModal();

  const onAddPet = () => {
    if (isLogined) {
      toggleModal();
    } else Notify.warning('Sorry, you should to sing in');
  };

  return (
    <Wrapper>
      <Text>Add pet</Text>
      <AddBtn onClick={onAddPet}>
        <IconAdd />
      </AddBtn>
      {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          {<NoticeModal onCloseModal={closeModal} />}
        </Modal>
      )}
    </Wrapper>
  );
};

export default AddNoticeButton;
