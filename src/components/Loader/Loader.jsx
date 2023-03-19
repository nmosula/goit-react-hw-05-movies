import { TailSpin } from 'react-loader-spinner';

import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <TailSpin color="#0000ff" />
    </StyledLoader>
  );
};

export default Loader;