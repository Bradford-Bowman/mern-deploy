import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';


const OneProduct = (props) => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
            .then(res => setProduct(res.data.Product))
            .catch(console.log("Something went wrong in seeing the product"))
    }, [])



    return (
        <>
            {
                product ? <>
                    < h2 ><b>Details about:</b> {product.title}</h2 >
                    {/* <Link to={`/product/update/${product._id}`}><button className="btn btn-danger">Adopt {product.title}</button></Link> */}
                    {/* <button onClick={() => props.removeProduct(props.product._id)} className="btn btn-danger">Adopt Garfield</button> */}
                    <br/><br/>
                    <div className="row">
                        <div className="col-sm-8">
                            <h4><b>Pet type:</b> {product.type}</h4>
                            <h4><b>Pet Description:</b> {product.description}</h4>
                            <br/><br/>
                            <h4><b>Skills:</b>
                            <br/><br/>
                            {product.skillOne}
                            <br/>
                            {product.skillTwo}
                            <br/>
                            {product.skillThree}</h4>
                            <br/><br/>
                            <button className="btn btn-success">Like {product.title}</button>
                            {/* <Link to={`/product/update/${product._id}`}><button className="btn btn-primary">Edit Product</button></Link> */}
                        </div>
                    </div>
                </> : ""
            }
        </>
    );

};



export default OneProduct;