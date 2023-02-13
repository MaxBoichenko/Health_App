import UserRoutes from './Routes/UserRoutes';
import Header from './Header/Header';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { refresh } from 'redux/auth/auth';

import Loader from 'components/Loader/Loader';

export const App = () => {
  const userIsRefreshing = useSelector(state => state.auth.isRefreshing);

  const sid = useSelector(state => state.auth.sid);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh({ sid }));
    // eslint-disable-next-line
  }, []);

  if (userIsRefreshing) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <UserRoutes />
    </>
  );
};
