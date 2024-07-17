import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import { Provider } from 'react-redux';
import store from '@stores/store';
import MainLayout from '@components/global/MainLayout';

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </MainLayout>
    </Provider>
  );
}

export default App;
