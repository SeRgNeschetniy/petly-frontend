import {
  Wrapper,
  MainPageImageDsktpA,
  MainPageImageDsktpB,
  MainPageImageDsktpC,
  MainPageImageDsktpD,
} from './MainPageDsktp.styled';

import dsctpImageA from '../../images/mainPage/home-bg1-d@2x.png';
import dsctpImageB from '../../images/mainPage/home-bg2-d@2x.png';
import dsctpImageC from '../../images/mainPage/home-bg3-d@2x.png';
import dsctpImageD from '../../images/mainPage/home-bg4-d@2x.png';

const MainPageImageDsktp = () => {
  return (
    <>
      <Wrapper>
        <MainPageImageDsktpA src={dsctpImageA} />
        <MainPageImageDsktpB src={dsctpImageB} />
        <MainPageImageDsktpC src={dsctpImageC} />
        <MainPageImageDsktpD src={dsctpImageD} />
      </Wrapper>
    </>
  );
};

export default MainPageImageDsktp;
