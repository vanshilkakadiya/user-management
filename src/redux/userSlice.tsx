import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  user: [],
};

const userSlices = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state=initialState, action) => {
        state.user=[...state.user,...action?.payload.data]
    },
  },
});

export const { setUser } = userSlices.actions;

export default userSlices.reducer;