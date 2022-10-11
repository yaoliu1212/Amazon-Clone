import React, { createContext, useContext, userContext, useReducer } from "react";

//Prepares the data layer
export const StateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pill information from the data layer
export const useStateValue = () => useContext(StateContext);