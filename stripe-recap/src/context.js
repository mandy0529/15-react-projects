import React, {useState, useContext} from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [content, setContent] = useState({page: '', links: []});

  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

  const openSubmenu = (content, location) => {
    const page = sublinks.find((item) => item.page === content);
    setContent(page);
    setLocation(location);
    setSubmenu(true);
  };
  const closeSubmenu = () => setSubmenu(false);

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        sidebar,
        submenu,
        content,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
