import React, {useState, useEffect} from 'react';
import Alert from './Alert';
import List from './List';

const LS_list = 'list';

const getLocalStorage = () => {
  const getLocalList = localStorage.getItem(LS_list);
  if (getLocalList) {
    return JSON.parse(getLocalList);
  }
  return [];
};

const App = () => {
  const [value, setValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({text: '', type: '', show: false});

  const setLocalStorage = () => {
    const localList = localStorage.setItem(LS_list, JSON.stringify(list));
    return localList;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      controlAlert('< please enter your value >', 'danger', true);
    } else if (value && isEditing) {
      setList(changeName);
      controlAlert('< this item edited >', 'success', true);
      setIsEditing(false);
      setValue('');
      setEditId(null);
    } else {
      const newItems = {id: Math.random(), name: value};
      setList([...list, newItems]);
      controlAlert('< items added > ', 'success', true);
      setValue('');
    }
  };
  console.log(value, '밸류');

  const handleClear = () => {
    setList([]);
    controlAlert('< empty list >', 'danger', true);
  };
  const controlAlert = (text = '', type = '', show = false) => {
    setAlert({text, type, show});
  };
  const removeItem = (id) => {
    const removedItem = list.filter((item) => item.id !== id);
    setList(removedItem);
    controlAlert('< this item deleted >', 'danger', true);
  };

  const editItem = (id) => {
    const editedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setValue(editedItem.name);
  };

  const changeName = () => {
    const changeTitle = list.map((item) => {
      if (item.id === editId) {
        return {...item, name: value};
      }
      return item;
    });
    return changeTitle;
  };

  useEffect(() => {
    setLocalStorage();
  }, [list]);
  console.log(list, '리스트');
  return (
    <section className="section-center">
      <h2>to do list</h2>
      {alert.show && (
        <Alert {...alert} controlAlert={controlAlert} list={list} />
      )}
      <form onSubmit={handleSubmit} className="form-control">
        <input
          onChange={handleChange}
          placeholder="write a list to buy"
          type="text"
          className="grocery"
          value={value}
        ></input>
        <button type="submit" value="enter" className="btn">
          {isEditing ? 'edit' : 'submit'}
        </button>
      </form>

      <div class="grocery-container">
        {list.length > 0 && (
          <>
            <List list={list} removeItem={removeItem} editItem={editItem} />
            <button onClick={handleClear} className="clear-btn">
              clear items
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default App;
