import { Route, Routes } from 'react-router-dom';
import { Home, Login, NotFound } from '@pages/index';
import { Provider } from 'react-redux';
import store from '@stores/store';
import MainLayout from '@components/global/MainLayout';
import SignupPage from '@pages/Signup';

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Provider>
  );
}

export default App;
