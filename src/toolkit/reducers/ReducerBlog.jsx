import {  createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: [
    {
      title:"Blog title",
      category:"blag category",
      tags:["good","bad","not not"],
      image:'',
      body:"blog body opfjdskhvklfdk jfdklbjklfdjvkd  dgfodipgo fidogifod  dovpfodklklkdlk;lkdl d lvkfldkvd;v "
    }
  ],
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload);
    },
    removeBlog : (state,action)=>{
      const id = action.payload.id;
      return state.filter(blog => blog.id != id)
    }
  
  },
 
});

export const { removeBlog, addBlog } = blogSlice.actions;
export default blogSlice.reducer;
