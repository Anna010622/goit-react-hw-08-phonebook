import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getError } from 'redux/selectors';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { currentUser } from 'redux/auth/authOperations';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

const Home = lazy(() => import('../../pages/Home'));
const Contacts = lazy(() => import('../../pages/Contacts'));
const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));

export const App = () => {
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong, please try again later');
    }
  }, [error]);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
