import React, {createContext, useContent, useReducer} from "react";

export const StateContext = createContext();


export const StateProvider = ({ reducer, })