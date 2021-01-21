import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import useAjax from './useAjax.js';

const todoAPI = 'https://basic-api-server-401.herokuapp.com/todo';

const ToDo = () => {

  
  const [count, setCount] = useState(5);
  const [makeApiCall, retrievedData] = useAjax(updateList)
  const [list, setList] = useState([
    { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
    { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
    { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
    { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
    { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
  ]);


  function updateList(method) {
    if (method === 'post') {
      addSavedItemToList(retrievedData)
    } else if (method === 'put') {
      replaceUpdatedItemInList(retrievedData)
    } else if (method === 'get') {
      processRetrievedData(retrievedData)
    }
  }

  const _addItem = (item) => {
    item.complete = false;
    console.log(item);
    makeApiCall(todoAPI, 'post', { body: JSON.stringify(item), _getTodoItems })
  };

  function addSavedItemToList(savedItem) {
    setList([...list, savedItem])
  }

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};
    if (!item._id) {
      return
    }
    item.complete = !item.complete;

    let url = `${todoAPI}/${id}`;

    makeApiCall(url, 'put', JSON.stringify(item), replaceUpdatedItemInList)
  };

  function replaceUpdatedItemInList(updatedItem) {
    setList(list.map(listItem =>
      listItem._id === updatedItem._id ? updatedItem : listItem));
  }

  const _getTodoItems = () => {
    makeApiCall(todoAPI, 'get', null, processRetrievedData)
  };

  function processRetrievedData(retrievedData) {
    setList(retrievedData.results)
  }

  // useEffect(_getTodoItems, []);


  // This runs only when the list changes
  useEffect(() => {
    setCount(list.filter(item => !item.complete).length);
  }, [list]);

  useEffect(() => {
    document.title = `To Do List: (${count})`;
  }, [count]);

  return (
    <>
      <header>
        <h2>
          There are ({count}) Items To Complete
          {/* There are ({Object.keys(list).length}) Items To Complete */}
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;