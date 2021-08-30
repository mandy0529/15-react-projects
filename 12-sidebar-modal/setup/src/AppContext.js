import React, {useContext, useState} from 'react';

const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <AppContext.Provider
        value={{
          sidebar,
          setSidebar,
          modal,
          setModal,
          openSidebar,
          closeSidebar,
          openModal,
          closeModal,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
