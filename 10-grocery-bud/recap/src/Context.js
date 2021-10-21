import React, {useContext, useState} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      // input창에 아무것도없이 submit했을때
      showAlert(true, 'danger', 'please enter your value');
    } else if (value && edit) {
      // 아이템 수정할때
    } else {
      // 아이템 추가할때
      showAlert(true, 'success', 'item added');
      const newItem = {id: Math.random(), title: value};
      setList([...list, newItem]);
      setValue('');
    }
    console.log(value);
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({show, type, msg});
  };

  return (
    <AppContext.Provider value={{value, list, edit, alert, handleSubmit}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
