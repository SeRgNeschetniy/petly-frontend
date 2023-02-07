import {
  Wrapper,
  ImageLong,
  ImageRight,
  ImageGirl,
  ImageHeart,
} from './MainPageDsktp.styled';

import dsctpImageFonL from '../../images/mainPage/home-bg1-d@1x.png';
import dsctpImageFonR from '../../images/mainPage/home-bg2-d@1x.png';
import dsctpImageGirl from '../../images/mainPage/home-bg3-d@1x.png';
import dsctpImageHeart from '../../images/mainPage/home-bg4-d@1x.png';

const MainPageImageDsktp = () => {
  return (
    <>
      <Wrapper>
        <ImageLong src={dsctpImageFonL} />
        <ImageRight src={dsctpImageFonR} />
        <ImageGirl src={dsctpImageGirl} />
        <ImageHeart src={dsctpImageHeart} />
      </Wrapper>
    </>
  );
};

export default MainPageImageDsktp;
