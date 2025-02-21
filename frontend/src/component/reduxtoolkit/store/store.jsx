


// import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// // import cartSlice from "../features/slice";
// import Cartslice from "../slice/addcart";
// // import { productsReducer } from "../slice/products";
// import productsReducer from "../slice/products";

// const persistConfig = {
//   key: 'cart',        
//   storage,
//   whitelist: ['carts'], 
// };

// const persistedReducer = persistReducer(persistConfig, Cartslice);

// export const store = configureStore({
//   reducer: {
//     allCart: persistedReducer,
//     allProducts: productsReducer,
//   },
// });

// // Create the persistor
// export const persistor = persistStore(store);










import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Cartslice from "../slice/addcart";
import productsReducer from "../slice/products";
import AmountReducer from "../slice/total";
import { combineReducers } from "redux";

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',  // Unique key for persistence
  storage,
  whitelist: ['allCart', 'allProducts','allAmounts'],  // Add 'allProducts' here
};

// Combine reducers
const rootReducer = combineReducers({
  allCart: Cartslice,
  allProducts: productsReducer,
  allAmounts: AmountReducer,
});

// Apply persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
export const persistor = persistStore(store);
