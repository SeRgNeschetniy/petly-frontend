import { Text, AddBtn, IconAdd, Wrapper } from './AddNoticeButton.styled';
import useModal from '../../../hooks/modal';
import Modal from 'components/Modal';
import NoticeModal from '../NoticeModal/NoticeModal';

const AddNoticeButtonMobile = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();

  return (
    <Wrapper>
      <AddBtn onClick={toggleModal}>
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
