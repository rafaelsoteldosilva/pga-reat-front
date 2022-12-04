import React, { useEffect } from "react";
import * as globalConstants from "./globalConstants";

const initialStateContext = {
   currentComponent: globalConstants.rootPath,
};

export const GlobalStateContext = React.createContext(initialStateContext);

const reducer = (state = initialStateContext, action) => {
   switch (action.type) {
      case globalConstants.setCurrentComponent:
         return { ...state, currentComponent: action.currentComponent };
   }
};

const GlobalContextProvider = ({ children }) => {
   const [globalState, globalDispatch] = React.useReducer(
      reducer,
      initialStateContext
   );

   return (
      <GlobalStateContext.Provider value={{ globalState, globalDispatch }}>
         {children}
      </GlobalStateContext.Provider>
   );
};

export default GlobalContextProvider;
