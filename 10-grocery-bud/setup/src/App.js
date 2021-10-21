import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert';

const LIST = 'list';

const getLocalStorage = () => {
  const list = localStorage.getItem(LIST);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [noti, setNoti] = useState({msg: '', type: '', show: false});
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showNoti(true, 'danger', 'please enter your values !');
    } else if (name && isEditing) {
      setList(changeTitleItem);
      showNoti(true, 'success', 'item edited ');
      setIsEditing(false);
      setName('');
      setEditId(null);
    } else {
      const newItems = {id: Math.random(), title: name};
      setList([...list, newItems]);
      showNoti(true, 'success', 'item added ');
      setName('');
    }
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClear = () => {
    setList([]);
    showNoti(true, 'danger', 'empty list');
  };

  const showNoti = (show = false, type = '', msg = '') => {
    setNoti({type, show, msg});
  };

  const removeItem = (id) => {
    const newItem = list.filter((item) => item.id !== id);
    setList(newItem);
    showNoti(true, 'danger', 'this item is removed');
  };

  const editItem = (id) => {
    const newItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(newItem.title);
  };

  const changeTitleItem = () => {
    const changeTitle = list.map((item) => {
      if (item.id === editId) {
        return {...item, title: name};
      }
      return item;
    });
    return changeTitle;
  };

  const setLocalStorage = () => {
    localStorage.setItem(LIST, JSON.stringify(list));
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      showNoti();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [noti]);

  useEffect(() => {
    setLocalStorage();
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {noti.show && <Alert {...noti} />}
        <h3>아빠 졸다가 일엉남s</h3>
        <div class="form-control">
          <input
            className="grocery"
            onChange={handleChange}
            value={name}
            placeholder="write a list to buy"
          ></input>
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div class="grocery-container">
          <List list={list} removeItem={removeItem} editItem={editItem} />
          <button onClick={handleClear} className="clear-btn">
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
