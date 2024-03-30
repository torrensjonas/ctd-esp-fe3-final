import axios from 'axios';
import {createContext, useEffect, useReducer, useMemo, useContext} from 'react';
import { reducer } from './reducer';

export const initialState = {theme: "", data: [], favs: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        console.log(res.data)
        dispatch({type: 'GET_LIST', payload: res.data})
    })
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};


export const useContextGlobal = () => useContext(ContextGlobal);
