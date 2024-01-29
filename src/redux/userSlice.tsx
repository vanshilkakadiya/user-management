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
<<<<<<< Updated upstream
      state.user = [action?.payload.data, ...state.user];
    },
    clearUser: state => {
      state.user = [];
=======
      state.user = [ ...action?.payload.data,...state.user];
>>>>>>> Stashed changes
    },
    clearUser : (state) => {
      state.user = [];
    },
    editData:(state,action)=>{
      
      state?.user.filter((item:any)=>{
        // console.log(item);
        
        if(item?.id==action?.payload?.id){
          // state.user=[...state.user.item=action.payload]
        }else{
          // state.user=[...state.user]
        }
        
      })
    }
  },
});

<<<<<<< Updated upstream
export const {setUser, setFirestoreUser, clearUser} = userSlices.actions;
=======
export const {setUser,setFirestoreUser,clearUser,editData} = userSlices.actions;
>>>>>>> Stashed changes

export default userSlices.reducer;
