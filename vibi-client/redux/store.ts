// store.ts
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // Opcional: para habilitar la extensión Redux DevTools
import counterReducer from './reducer'; // Reemplaza con la ubicación de tus reducers

const rootReducer = combineReducers({
  counter: counterReducer,
  // Agrega más reducers aquí si es necesario
});

const store = createStore(
  rootReducer,
  composeWithDevTools() // Opcional: para habilitar la extensión Redux DevTools
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
