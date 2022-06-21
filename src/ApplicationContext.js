import { createContext } from "react";

const AppContext = createContext({
  page: "home",
});

export const AppContextProvider = AppContext.Provider;

export default AppContext;
