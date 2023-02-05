import { Text, AddBtn, Wrapper, IconAdd } from './AddNoticeButton.styled';
import useModal from '../../../hooks/modal';
import Modal from 'components/Modal';
import NoticeModal from '../NoticeModal/NoticeModal';

const AddNoticeButton = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();
  return (
    <Wrapper>
      <Text>Add pet</Text>
      <AddBtn onClick={toggleModal}>
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
