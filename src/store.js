import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import menuSlice from './slices/menuSlice';
import quizSlice from './slices/quizSlice';
import dogBreedsSlice from './slices/dogbreedsSlice';

const store = configureStore({
  reducer: {
    menu: menuSlice, // add slice reducer
    quiz: quizSlice,
    dogreeds: dogBreedsSlice
  },
})

export const wrapper = createWrapper(() => store);
export default store;
