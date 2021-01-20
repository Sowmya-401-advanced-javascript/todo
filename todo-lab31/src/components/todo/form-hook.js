import { useState } from 'react';

const useForm = (callback) => {
    const [values, setValues] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        let canSend = (values.text && values.difficulty && values.assignee) ? true : false;
        canSend && callback(values)
        setValues({});
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return [
        handleChange,
        handleSubmit,
        values
    ]
}

export default useForm;