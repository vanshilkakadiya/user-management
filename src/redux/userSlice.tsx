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
    editData: (state, action) => {
      state.user = state?.user.map((item: any) => {
        if (item?.id === action?.payload?.id) {
          return {...item, ...action?.payload};
        } else {
          return item;
        }
      });
    },
  },
});

export const {setUser, setFirestoreUser, clearUser, editData} =
  userSlices.actions;

export default userSlices.reducer;
