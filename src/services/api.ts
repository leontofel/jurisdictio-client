import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginPayload, LoginResponse } from '../types/auth';
import { loggedAxios, unloggedAxios } from './axios';
import { GetRequestPayload, Question } from '../types/question';
import { RootState } from '@stores/store';

export const login: AsyncThunk<LoginResponse, LoginPayload, object> =
  createAsyncThunk<LoginResponse, LoginPayload>(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await unloggedAxios.post('/login', credentials);
        return response.data;
      } catch (error) {
        return rejectWithValue('Failed to login');
      }
    },
  );

export function register(name: string, email: string, password: string) {
  return unloggedAxios.post('/register', { name, email, password });
}

export const fetchLastQuestions = createAsyncThunk<
  Question[],
  GetRequestPayload,
  { state: RootState }
>('questions/fetchLastQuestions', async (payload) => {
  const params: GetRequestPayload = {};
  if (payload.order) {
    params.order = payload.order;
  }
  if (payload.offset) {
    params.offset = payload.offset;
  }

  const response = await loggedAxios.get('/question', { params });
  return response.data;
});