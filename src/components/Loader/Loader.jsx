import { TailSpin } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

const Loader = ({position}) => {
  return (
    <LoaderStyled position={position}>
      <TailSpin
        height="80"
        width="80"
        color="#f59256"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderStyled>
  );
};
export default Loader;
