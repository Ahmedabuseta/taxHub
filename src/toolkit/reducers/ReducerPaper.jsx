import {  createSlice } from "@reduxjs/toolkit";

export const paperSlice = createSlice({
  name: "paper",
  initialState: [
   
  ],
  reducers: {
    addPaper: (state, action) => {
      state.push(action.payload);
    },
    removePaper : (state,action)=>{
      const id = action.payload.id;
      return state.filter(paper => paper.id!= id)
    }
  },
 
});

export const { removePaper, addPaper } = paperSlice.actions;
export default paperSlice.reducer;
