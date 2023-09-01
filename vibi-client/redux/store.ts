// store.ts

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'


// Infer the RootState and AppDispatch types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;


