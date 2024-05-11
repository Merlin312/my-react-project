import { useEffect } from 'react';

const Other = () => {
  useEffect(() => {
    setInterval(() => {
      console.clear();
      console.log('clear');
    }, 3000);
  }, []);
  return <></>;
};
export default Other;
