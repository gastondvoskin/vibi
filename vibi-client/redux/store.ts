import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'

// Infer the RootState and AppDispatch types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;




// const composedEnhancer = compose;

// const store = createStore(rootReducer, composedEnhancer(applyMiddleware(thunkMiddleware)));

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;


// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
/* window__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  */