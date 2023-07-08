import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reduser";
const initState = {
  watchlist: localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],
  watched: localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[],
};
export const ContextG = createContext(initState);


const ContextProviders = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(()=>{
    localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
    localStorage.setItem("watched",JSON.stringify(state.watched))
  },[state])
  return (
    <ContextG.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        moviesDispatch: dispatch,
      }}
    >
      {children}
    </ContextG.Provider>
  );
};

export default ContextProviders;
export const useMovieContext=()=>{
    return useContext(ContextG);
}