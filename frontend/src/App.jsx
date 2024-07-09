import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AppLayout from './pages/AppLayout';
// import Home from './pages/Home';
// import Search from './pages/Search';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import RegistrationValidation from './pages/RegistrationValidation';
// import ErrorPage from './pages/ErrorPage';

import Profile from './pages/Profile';
// import RestaurantPage from './pages/RestaurantPage';
// import CreateRestaurant from './pages/CreateRestaurant';
// import { Toaster } from 'react-hot-toast';
// import ForgotPassword from './pages/ForgotPassword';
// import NewPassword from './pages/NewPassword';
import GlobalStyle from '../GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
