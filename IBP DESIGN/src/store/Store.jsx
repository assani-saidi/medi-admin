import React, { createContext, useReducer } from "react";
import { authInitialState } from "./initialStates";
import authReducer from "./reducers/authReducer";

export const Store = createContext();

export default function StoreProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  return (
    <Store.Provider value={{ authState, authDispatch }}>
      {children}
    </Store.Provider>
  );
}
