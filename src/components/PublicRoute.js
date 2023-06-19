import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to={location.state ? location.state : '/contacts'} />
  );
};
