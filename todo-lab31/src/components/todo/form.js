import React, { useState, useEffect } from 'react';
import useForm from './form-hook';

function TodoForm(props) {
    const [item, setItem] = useState({text: '', difficulty: 1, assignee: ''});
    const [_changeInput, _submitForm, formData] = useForm(submit)

    function submit(todo) {
        props.handleSubmit(todo)
    }

    // This runs only when the item changes
    useEffect(() => {
        console.log(item);
    }, [item]);

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
                <button type="submit">Add Item</button>
            </form>
        </>
    );
}


export default TodoForm;