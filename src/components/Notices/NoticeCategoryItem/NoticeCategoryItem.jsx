import { Item, LearnMoreBtn ,Wrapper, Title, Text, Container, Sticker, AddToFavoriteBtn, DeleteBtn, Span} from "./NoticeCategoryItem.styled";
import { FiHeart } from "react-icons/fi";
import {RiDeleteBin5Fill} from "react-icons/ri"


const NoticeCategoryItem = ({sellPets}) => {
    return (
        <>
        <Item >
                    <img src={"https://media.istockphoto.com/id/1071204136/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BC%D0%BF%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%B1%D0%B5%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B8%D0%B3%D1%80%D0%B0%D1%8E%D1%82.jpg?s=612x612&w=0&k=20&c=MkwQYNferCtvWJk2h4SgA0w-OdY3tUpagIAyw0DeJPs="} alt="pet" minwidth={288}
                    />
                    <Sticker>Sell</Sticker>
                <AddToFavoriteBtn>
                    {/* <svg width="24">
                        <use href="../images/add.svg"></use>
                    </svg> */}
                    <FiHeart size={24} color="#F59256"/>
                </AddToFavoriteBtn>
                <Container>
                    <Wrapper>
                    <Title>Pet</Title>
                    <Text>Breed:</Text>
                    <Text>Place: </Text>
                    <Text>Age: </Text>
                </Wrapper>
                    <LearnMoreBtn >Learn more</LearnMoreBtn>
                    {/* <DeleteBtn>Delete
                        <RiDeleteBin5Fill style={{ marginLeft: "15px" }}/>
                    </DeleteBtn> */}
</Container>
        </Item>
        <Item >
                    <img src={"https://media.istockphoto.com/id/1071204136/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BC%D0%BF%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%B1%D0%B5%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B8%D0%B3%D1%80%D0%B0%D1%8E%D1%82.jpg?s=612x612&w=0&k=20&c=MkwQYNferCtvWJk2h4SgA0w-OdY3tUpagIAyw0DeJPs="} alt="pet" minwidth={288}
                    />
                    <Sticker>Sell</Sticker>
                <AddToFavoriteBtn>
                    {/* <svg width="24">
                        <use href="../images/add.svg"></use>
                    </svg> */}
                    <FiHeart size={24} color="#F59256"/>
                </AddToFavoriteBtn>
                <Container>
                    <Wrapper>
                    <Title>Pet</Title>
                    <Text>Breed:</Text>
                    <Text>Place: </Text>
                    <Text>Age: </Text>
                </Wrapper>
                    <LearnMoreBtn >Learn more</LearnMoreBtn>
                    {/* <DeleteBtn>Delete
                        <RiDeleteBin5Fill style={{ marginLeft: "15px" }}/>
                    </DeleteBtn> */}
</Container>
            </Item>
        <Item >
                    <img src={"https://media.istockphoto.com/id/1071204136/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BC%D0%BF%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%B1%D0%B5%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B8%D0%B3%D1%80%D0%B0%D1%8E%D1%82.jpg?s=612x612&w=0&k=20&c=MkwQYNferCtvWJk2h4SgA0w-OdY3tUpagIAyw0DeJPs="} alt="pet" minwidth={288}
                    />
                    <Sticker>Sell</Sticker>
                <AddToFavoriteBtn>
                    {/* <svg width="24">
                        <use href="../images/add.svg"></use>
                    </svg> */}
                    <FiHeart size={24} color="#F59256"/>
                </AddToFavoriteBtn>
                <Container>
                    <Wrapper>
                    <Title>Pet</Title>
                    <Text><Span>Breed:</Span>XXX</Text>
                    <Text><Span>Place:</Span></Text>
                    <Text><Span>Age:</Span></Text>
                </Wrapper>
                    <LearnMoreBtn >Learn more</LearnMoreBtn>
                    {/* <DeleteBtn>Delete
                        <RiDeleteBin5Fill style={{ marginLeft: "15px" }}/>
                    </DeleteBtn> */}
</Container>
            </Item>
        <Item >
                    <img src={"https://media.istockphoto.com/id/1071204136/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BC%D0%BF%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%B1%D0%B5%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B8%D0%B3%D1%80%D0%B0%D1%8E%D1%82.jpg?s=612x612&w=0&k=20&c=MkwQYNferCtvWJk2h4SgA0w-OdY3tUpagIAyw0DeJPs="} alt="pet" minwidth={288}
                    />
                    <Sticker>Sell</Sticker>
                <AddToFavoriteBtn>
                    {/* <svg width="24">
                        <use href="../images/add.svg"></use>
                    </svg> */}
                    <FiHeart size={24} color="#F59256"/>
                </AddToFavoriteBtn>
                <Container>
                    <Wrapper>
                    <Title>Pet</Title>
                    <Text>Breed:</Text>
                    <Text>Place: </Text>
                    <Text>Age: </Text>
                </Wrapper>
                    <LearnMoreBtn >Learn more</LearnMoreBtn>
                    {/* <DeleteBtn>Delete
                        <RiDeleteBin5Fill style={{ marginLeft: "15px" }}/>
                    </DeleteBtn> */}
</Container>
            </Item>
        <Item >
                    <img src={"https://media.istockphoto.com/id/1071204136/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BC%D0%BF%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%B1%D0%B5%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B8%D0%B3%D1%80%D0%B0%D1%8E%D1%82.jpg?s=612x612&w=0&k=20&c=MkwQYNferCtvWJk2h4SgA0w-OdY3tUpagIAyw0DeJPs="} alt="pet" minwidth={288}
                    />
                    <Sticker>Sell</Sticker>
                <AddToFavoriteBtn>
                    {/* <svg width="24">
                        <use href="../images/add.svg"></use>
                    </svg> */}
                    <FiHeart size={24} color="#F59256"/>
                </AddToFavoriteBtn>
                <Container>
                    <Wrapper>
                    <Title>Pet</Title>
                    <Text>Breed:</Text>
                    <Text>Place: </Text>
                    <Text>Age: </Text>
                </Wrapper>
                    <LearnMoreBtn >Learn more</LearnMoreBtn>
                    {/* <DeleteBtn>Delete
                        <RiDeleteBin5Fill style={{ marginLeft: "15px" }}/>
                    </DeleteBtn> */}
</Container>
            </Item>
        <Item >
                    <img src={"https://media.istockphoto.com/id/1071204136/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BC%D0%BF%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%B1%D0%B5%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B8%D0%B3%D1%80%D0%B0%D1%8E%D1%82.jpg?s=612x612&w=0&k=20&c=MkwQYNferCtvWJk2h4SgA0w-OdY3tUpagIAyw0DeJPs="} alt="pet" minwidth={288}
                    />
                    <Sticker>Sell</Sticker>
                <AddToFavoriteBtn>
                    {/* <svg width="24">
                        <use href="../images/add.svg"></use>
                    </svg> */}
                    <FiHeart size={24} color="#F59256"/>
                </AddToFavoriteBtn>
                <Container>
                    <Wrapper>
                    <Title>Pet</Title>
                    <Text>Breed:</Text>
                    <Text>Place: </Text>
                    <Text>Age: </Text>
                </Wrapper>
                    <LearnMoreBtn >Learn more</LearnMoreBtn>
                    {/* <DeleteBtn>Delete
                        <RiDeleteBin5Fill style={{ marginLeft: "15px" }}/>
                    </DeleteBtn> */}
</Container>
            </Item>
        </>
    )
}

export default NoticeCategoryItem;