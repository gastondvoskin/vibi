import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux';
import publicationReducer from './reducers/publicationReducer';
import userReducer from './reducers/userReducer';
import filterReducer from './reducers/filtersReducer';


const rootReducer = combineReducers({
  publication: publicationReducer, 
  user: userReducer,
  filters: filterReducer

});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;


