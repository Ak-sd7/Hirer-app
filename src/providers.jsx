import { createContext, useContext, useState } from "react";

const Context = createContext({ isAuthenticated: false });

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [server, setServer] = useState("");

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
        server,
        setServer,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContextProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContextProvider must be used within Provider");
  }
  return context;
};

export default Context;
