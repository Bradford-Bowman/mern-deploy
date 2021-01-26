import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router';


const UpdateProduct = (props) => {
    const [form, setForm] = useState({
        title: "",
        date: "",
        price: "",
        description: ""
    })

    const [error, setError] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
            .then(res => setForm(res.data.Product))
            .catch(console.log("Something went wrong in seeing the product"))
    }, [])

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${props._id}`, form)
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error.errors)
                }
                else {
                    navigate("/")
                }
            })
            .catch(console.log("Something went wrong in updating the product"))
    }

    return (
        <div>
            <h4>Edit: {props.title}</h4>
            <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error}/>
        </div>
    );
};



export default UpdateProduct;