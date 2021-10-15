import { createContext, useReducer } from "react";
export const Store = createContext();

const initialState = {};

// Creating reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT": {
    }
    case "BACK": {
    }
    case "SUBMIT": {
    }
    case "RESET": {
    }
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
