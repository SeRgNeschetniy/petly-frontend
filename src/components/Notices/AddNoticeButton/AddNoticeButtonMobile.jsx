import { Text, AddBtn, IconAdd, Wrapper } from './AddNoticeButton.styled';
import useModal from '../../../hooks/modal';
import Modal from 'components/Modal';
import NoticeModal from '../NoticeModal/NoticeModal';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const AddNoticeButtonMobile = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();
  const isLogined = useSelector(selectIsLogin);

  const onAddPet = () => {
    if (isLogined) {
      toggleModal();
    } else Notify.warning('Sorry, you should to sing in');
  };

  return (
    <Wrapper>
      <AddBtn onClick={onAddPet}>
        <IconAdd />
        <Text>Add pet</Text>
      </AddBtn>
      {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          {<NoticeModal onCloseModal={closeModal} />}
        </Modal>
      )}
    </Wrapper>
  );
};

export default AddNoticeButtonMobile;
