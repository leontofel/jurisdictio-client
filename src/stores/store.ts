import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // seus reducers aqui
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;