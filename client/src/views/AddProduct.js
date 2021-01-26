import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router';


const AddProduct = (props) => {
    const [form, setForm] = useState({
        title: "",
        date: "",
        price: "",
        description: ""
    })

    const [error, setError] = useState({})

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new", form)
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error.errors)
                }
                else {
                    navigate("/")
                }
            })
            .catch(console.log("Something went wrong in adding the product"))
    }


    return (
        <div>
            <h4 className="m-2">Know a pet needing a home?</h4>
            <br/><br/>
            <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error}/>
        </div>
    );
};


export default AddProduct;