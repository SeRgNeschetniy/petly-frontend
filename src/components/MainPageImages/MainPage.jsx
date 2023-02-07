import MainPageImageDsktp from './MainPageDsktp';

import {
  Title,
  Wrapper,
  MainPageImage,
  MainPageImageTab,
} from './MainPage.styled';
import mobileImage from '../../images/mainPage/home-bg-m@2x.png';
import tabImage from '../../images/mainPage/home-bg-t@2x.png';

const Headline = () => {
  return (
    <>
      <Wrapper>
        <Title>
          Take good care of <br />
          your small pets
        </Title>
        {/* <MainPageImageDsktp />
        <MainPageImage src={mobileImage} />
        <MainPageImageTab src={tabImage} /> */}
      </Wrapper>
      {/* <MainPageImageDsktp /> */}
    </>
  );
};

export default Headline;
