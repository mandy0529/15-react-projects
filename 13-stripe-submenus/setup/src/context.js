import React, {useState, useContext} from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [text, setText] = useState({page: '', links: []});

  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const openSubmenu = (text, coordinate) => {
    const page = sublinks.find((item) => item.page === text);
    setText(page);
    setLocation(coordinate);
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
        location,
        text,
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
