import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginPayload, LoginResponse } from '../types/auth';
import { unloggedAxios } from './axios';


export const login: AsyncThunk<LoginResponse, LoginPayload, object> = createAsyncThunk<
  LoginResponse,
  LoginPayload
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await unloggedAxios.post('/login', credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue('Failed to login');
  }
});

export function register(name: string, email: string, password: string) {
  return unloggedAxios.post('/register', { name, email, password });
}