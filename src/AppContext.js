// AppContext.js
import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  username: '',
  selectedBooks: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, username: action.payload };
    case 'SET_BOOKS':
      return { ...state, selectedBooks: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
