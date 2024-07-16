// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../services/axios';

// // Define a thunk for async actions
// export const fetchExampleData: Promise = createAsyncThunk(
//   'example/fetchExampleData',
//   async () => {
//     const response = await api.get('/data');
//     return response.data;
//   },
// );

// interface ExampleState {
//   data: any[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: ExampleState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// const exampleSlice = createSlice({
//   name: 'example',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchExampleData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchExampleData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchExampleData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Something went wrong';
//       });
//   },
// });

// export default exampleSlice.reducer;
