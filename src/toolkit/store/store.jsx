

import { configureStore } from '@reduxjs/toolkit';
import { blogSlice } from '../reducers/ReducerBlog';
import { paperSlice } from '../reducers/ReducerPaper';
import { ServicesSlice } from '../reducers/ReducerServreis';
import { UsersSlice } from '../reducers/ReducerUsers';

const Store = configureStore({
    reducer: {
        services: ServicesSlice.reducer,
        users: UsersSlice.reducer,
        blogs: blogSlice.reducer,
        papers: paperSlice.reducer,
    },
});

export default Store;
