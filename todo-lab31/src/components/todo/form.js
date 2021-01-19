import React, { useState, useEffect } from 'react';

function TodoForm(props) {
    const [item, setItem] = useState({text: '', difficulty: 1, assignee: ''});

    const _changeInput = (e) => {
        setItem({...item, [e.target.name]: e.target.value})
    }

    // This runs only when the item changes
    useEffect(() => {
        console.log(item);
    }, [item]);

    // function handleInputChange(e) {
    //     item[e.target.name] = e.target.value;
    //     setItem(item);
    // };

    const _submitForm = (e) => {
        e.preventDefault();
        e.target.reset(); 
        let send = (item.text && item.difficulty && item.assignee) ? true : false;
        send && props.handleSubmit(item);
        // item.text && item.difficulty && item.assignee && props.handleSubmit(item);
        setItem({});
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     e.target.reset(); 
    //     props.handleSubmit([item]); //send the form data up to the parent
    //     const item = {}; // create item as empty object
    //     setItem({item}); // Reset to the empty object 'item'
    // };

    return (
        <>
            <h3>Add Item</h3>
            <form onSubmit={_submitForm}>
                <label>
                    <span>To Do Item</span>
                    <input
                        name="text"
                        placeholder="Add To Do List Item"
                        onBlur={_changeInput}
                    />
                </label>
                <label>
                    <span>Difficulty Rating</span>
                    <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onBlur={_changeInput} />
                </label>
                <label>
                    <span>Assigned To</span>
                    <input type="text" name="assignee" placeholder="Assigned To" onBlur={_changeInput} />
                </label>
                <button>Add Item</button>
            </form>
        </>
    );
}


export default TodoForm;