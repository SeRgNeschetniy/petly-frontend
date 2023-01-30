import { Text, AddBtn, Wrapper } from "./ AddNoticeButton.styled";
import { IoAdd } from "react-icons/io5";

const AddNoticeButton = () => {
    return (
        <Wrapper>
            <Text>Add pet</Text>
            <AddBtn>
                <IoAdd size={ 24} color="#ffffff"/>
            </AddBtn>
        </Wrapper>
    )
}

export default AddNoticeButton;