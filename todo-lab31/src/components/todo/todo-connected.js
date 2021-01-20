import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';
import useAjax from './useAjax.js';

const todoAPI = 'https://basic-api-server-401.herokuapp.com/todo';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [makeApiCall, retrievedData] = useAjax(updateList)

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
    item.due = new Date();
    makeApiCall(todoAPI, 'post', JSON.stringify(item), addSavedItemToList)
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

  useEffect(_getTodoItems, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
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