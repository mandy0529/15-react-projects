import React, {useState, useContext} from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [sidebar, setSidebar] = useState(true);
  const [submenu, setSubmenu] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const openSubmenu = () => {
    setSubmenu(true);
  };
  const closeSubmenu = () => {
    setSubmenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebar,
        submenu,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(AppContext);
};

export default AppProvider;
