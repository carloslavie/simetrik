import { configureStore } from '@reduxjs/toolkit'
import buscadorReducer from '../reducers/buscadorReducer'

const store = configureStore({
  reducer: {
    busqueda: buscadorReducer,    
  },
})

export default store

// import buscadorReducer from '../reducers/buscadorReducer';
// import { configureStore } from '@reduxjs/toolkit';
// // import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';;

// const reducers = combineReducers({
//   busqueda: buscadorReducer,
// });
// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducers);
// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// });
// export default store;