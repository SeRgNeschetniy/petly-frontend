import Modal from 'components/Modal';
import AddPetsModal from '../AddPetsModal/AddPetsModal';
import useModal from '../../../hooks/modal';
import {
  MainText,
  H3,
  AddButton,
  SecondBox,
  Head,
  AddPet,
} from './PetsData.styled';

import { TfiPlus } from 'react-icons/tfi';
import Loader from 'components/Loader';
import PetsCard from './PetCard/PetCard';
import { selectIsLoading } from 'redux/userpage/userpage-selectors';
import { useSelector } from 'react-redux';

export default function PetsData() {
  const isLoading = useSelector(selectIsLoading);
  const { isModalOpen, closeModal, toggleModal } = useModal();

  return (
    <SecondBox>
      <Head>
        <MainText>My pets:</MainText>
        <AddPet>
          <H3>Add pet</H3>
          <AddButton onClick={toggleModal}>
            {isLoading ? <Loader position="relative" /> : 
          <TfiPlus
              style={{ color: '#FFFFFF', height: '18px', width: '16px' }}
            ></TfiPlus>
          }
          </AddButton>
        </AddPet>
        {isModalOpen && (
          <Modal onCloseModal={closeModal}>
            <AddPetsModal onCloseModal={closeModal} />
          </Modal>
        )}
      </Head>

      <PetsCard />
    </SecondBox>
  );
}
