import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import fetchDataSlice, { setData } from './slices/fetchDataSlice';
import menuSlice from './slices/menuSlice';
import quizSlice from './slices/quizSlice';

// source: chatGPT
// fetch all dogbreeds from git gist json file
const fetchData = () => async (dispatch) => {
  const url = 'https://gist.githubusercontent.com/lstubdal/7c7161c4779b0fc49ffe81414f4c8854/raw/5d1ae39d9bbb6591cb9abb71e3dd290ec13c651f/dogbreeds.json'
  const response = await fetch(url);
  const data = await response.json();
  dispatch(setData(data));
};

// source: chatGPT
// a custom middleware that dispatches the fetch action and then calls the setData action to store the data 
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunkMiddleware).concat((store) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    }
    return next(action);
  });


// configure store
const store = configureStore({
  reducer: {
    menu: menuSlice, 
    quiz: quizSlice,
    fetchedData: fetchDataSlice
  },

  middleware,
})

store.dispatch(fetchData()); // fetch data for each component


export const wrapper = createWrapper(() => store);
export default store;
