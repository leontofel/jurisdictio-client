import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, NotFound } from '@pages/index';
import { Provider } from 'react-redux';
import store from '@stores/store';
import MainLayout from '@components/global/MainLayout';

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Provider>
  );
}

export default App;
