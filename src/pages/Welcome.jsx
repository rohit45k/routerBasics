import { Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>Welcome Page</h1>
      <Outlet />
    </>
  );
};

export default Welcome;
