import {
  Wrapper,
  MainPageImageDsktpA,
  MainPageImageDsktpB,
  MainPageImageDsktpC,
  MainPageImageDsktpD,
} from './MainPageDsktp.styled';

import dsctpImageFonL from '../../images/mainPage/home-bg1-d@2x.png';
import dsctpImageFonR from '../../images/mainPage/home-bg2-d@2x.png';
import dsctpImageGirl from '../../images/mainPage/home-bg3-d@2x.png';
import dsctpImageHeart from '../../images/mainPage/home-bg4-d@2x.png';

const MainPageImageDsktp = () => {
  return (
    <>
      <Wrapper>
        <MainPageImageDsktpA src={dsctpImageFonL} />
        <MainPageImageDsktpB src={dsctpImageFonR} />
        <MainPageImageDsktpC src={dsctpImageGirl} />
        <MainPageImageDsktpD src={dsctpImageHeart} />
      </Wrapper>
    </>
  );
};

export default MainPageImageDsktp;
