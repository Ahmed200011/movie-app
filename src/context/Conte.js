import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reduser";
const initState = {
  watchlist: [],
  watched: [],
};
export const ContextG = createContext(initState);


const ContextProviders = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState);
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