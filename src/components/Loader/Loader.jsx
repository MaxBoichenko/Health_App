import { Dna } from 'react-loader-spinner';

import slimaky from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={slimaky.loader}>
      <Dna
        height="150"
        width="150"
        color="#fc842d"
        secondaryColor="transparent"
      />
    </div>
  );
};

export default Loader;
