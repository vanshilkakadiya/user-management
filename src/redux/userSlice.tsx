import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  user: [],
};

const userSlices = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state = initialState, action) => {
      state.user = [...state.user, ...action?.payload.data];
    },
    setFirestoreUser: (state = initialState, action) => {
      state.user = [ ...action?.payload.data,...state.user];
    },
  },
});

export const {setUser,setFirestoreUser} = userSlices.actions;

export default userSlices.reducer;
