import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  user: [],
};

const userSlices = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = [...state.user, ...action?.payload.data];
    },
    setFirestoreUser: (state, action) => {
      state.user = [action?.payload.data, ...state.user];
    },
    clearUser: state => {
      state.user = [];
    },
  },
});

export const {setUser, setFirestoreUser, clearUser} = userSlices.actions;

export default userSlices.reducer;
