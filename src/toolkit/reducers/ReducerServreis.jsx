import {  createSlice } from "@reduxjs/toolkit";

export const ServicesSlice = createSlice({
  name: "Services",
  initialState: [
   
  ],
  reducers: {
    addServices: (state, action) => {
      state.push(action.payload);
    },
    removeServices : (state,action)=>{
      const id = action.payload.id;
      return state.filter(services => services.id!= id)
    }
  },
 
});

export const { removeServices, addServices } = ServicesSlice.actions;
export default ServicesSlice.reducer;
