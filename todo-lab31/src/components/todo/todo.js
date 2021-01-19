import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

function ToDo() {
    
    const [count, setCount] = useState();
    const [list, setList] = useState([
        { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
            { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
            { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
            { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
            { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ]);

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

// function setTitle(list) {

//     var completeCount = 0
//     for (let index = 0; index < list.length; index++) {
//         if (list[index].complete === true) {
//             completeCount++
//         }        
//     }

//     const incompleteCount = list.length - completeCount

//     document.title = "Incomplete: " + incompleteCount + " | Complete: " + completeCount
// }


export default ToDo;