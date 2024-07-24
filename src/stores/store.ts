import { configureStore } from '@reduxjs/toolkit';
import authReducer from './loginSlice';
import questionsReducer from './questionSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    questions: questionsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;