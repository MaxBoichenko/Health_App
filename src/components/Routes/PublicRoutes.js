import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLogin = useSelector(state => state.login);

  if (isLogin) {
    return <Navigate to="/dairy" />;
  }

  return <Outlet />;
};

export default PublicRoute;
