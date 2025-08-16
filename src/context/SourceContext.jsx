// client/src/context/SourceContext.jsx
import { createContext, useContext } from "react";

const SourceContext = createContext();

export const SourceProvider = ({ children }) => {
    
   const backendURL =
    import.meta.env.VITE_API_BASE_URL || process.env.REACT_APP_API_BASE_URL;

  return (
    <SourceContext.Provider value={{ backendURL }}>
      {children}
    </SourceContext.Provider>
  );
};

export const useSource = () => useContext(SourceContext);
