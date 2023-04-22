import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import menuSlice from './components/hamburger/menuSlice'

const store = configureStore({
  reducer: {
    menu: menuSlice // add slice reducer
  },
})

export const wrapper = createWrapper(() => store);
export default store;
