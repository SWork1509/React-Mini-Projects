import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, 'danger', 'please provide item');
    } else if (name && isEditing) {
      // deal with edit
      setList(list.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            title: name
          }
        }
        return item;
      }))
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      // show alert and create new item
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList([...list, newItem]);
      showAlert(true, 'success', `${newItem.title} successfully added`)
      setName('');

    }
  }

  const showAlert = (show = false, type = '', message = '') => {
    setAlert({ show, message, type })
  }

  const clearListItems = () => {
    showAlert(true, 'danger', 'items cleared successfully');
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    const newItems = list.filter(item => item.id !== id);
    setList(newItems);
  }

  const editItem = (id) => {
    const selectedItem = list.find(item => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(selectedItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])


  return <section className='section-center'>
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert  {...alert} removeAlert={showAlert} />}
      <h3>Grocery Bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="e.g. Bread" name="grocery-item" id="grocery-item" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" className='submit-btn'>{isEditing ? 'Edit' : 'Submit'}</button>
      </div>
    </form>
    {list.length > 0 && <div className='grocery-container'>
      <List items={list} removeItem={removeItem} editItem={editItem} list={list} />
      <button className="clear-btn" onClick={clearListItems} > Clear Item</button>
    </div>}

  </section>

}
export default App
