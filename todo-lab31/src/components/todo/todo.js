import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';

function ToDo() {


    const addItem = (item) => {
        item._id = Math.random();
        item.complete = false;
        setList([...list, item]);
    };

    const toggleComplete = id => {

        let item = list.filter(i => i._id === id)[0] || {};

        if (item._id) {
            item.complete = !item.complete;
            setList(list.map(listItem => listItem._id === item._id ? item : listItem));
        }
    };


    return (
        <>
            <header>
                <h2>
                    {/* There are ({count}) Items To Complete */}
                    {/* There are {list.filter(item => !item.complete).length} Items To Complete */}
                </h2>
            </header>

            <section className="todo">

                <div>
                    <TodoForm handleSubmit={addItem} />
                </div>

                <div>
                    <TodoList
                        list={list}
                        handleComplete={toggleComplete}
                    />
                </div>
            </section>
        </>
    );
}


export default ToDo;