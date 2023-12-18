import {  createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "Users",
  initialState: [
  {
    id:0,
    email:"ahmed",
    userName:'ahmed',
    password:"1",
    role:"admin",
    image:'',
    online:false
  },
  {
    id:1,
    email:"ahmed1",
    userName:'ahmed1',
    password:"1",
    role:"user",
    image:'',
    online:false
  }
  ],
  reducers: {
    addUser: (state, action) => {
      let ids =state.filter(user=>user.id)

      let id = action.payload.id
      let index = ids.findIndex(id)
      if(index != -1){
        state[index] = {...action.payload}
      }else{
        state.push({...action.payload,id:state.length});
      }
      
    },
    removeUser : (state,action)=>{
      const id = action.payload.id;
      return state.filter(user => user.id!= id)
    },
    login:(state,action)=>{
      const id = action.payload
      state[id].online = true;
    },
    logOut:(state,action)=>{
      const id = action.payload
      state[id].online = false;
    }
  },
 
});

export const { removeUser, addUser ,login ,logOut} = UsersSlice.actions;
export default UsersSlice.reducer;
