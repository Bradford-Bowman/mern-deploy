import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';


const Main = (props) => {
    const [allProducts, setAllProducts] = useState(null);

    const [update, setUpdate] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setAllProducts(res.data.Products))
    }, [update])

    const removeProduct = (_id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${_id}`)
            .then(setUpdate(!update))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>These pets are looking for a good home</h3>
            {
                allProducts ?
                allProducts.map((p, i) => {
                    return  <ProductCard product={p} removeProduct={removeProduct}></ProductCard>
                }) : ""
            }
        </div>
    );
};



export default Main;