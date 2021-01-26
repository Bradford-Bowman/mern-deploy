import React from 'react';
import { Link } from '@reach/router'

const ProductCard = props => {
    return(
        <div className="card">
            <div class="card-body">
                {/* <h4 class="card-title">Pet Name: <Link to={`/product/${props.product._id}`}>{props.product.title}</Link></h4> */}
                <h4 class="card-title"><b>Pet Name:</b> {props.product.title}</h4>
                <button onClick={() => props.removeProduct(props.product._id)} className="btn btn-danger">Adopt {props.product.title}</button>
                <br/><br/>
                <p class="card-text"><b>Pet Type:</b> {props.product.type}</p>
                <p class="card-text"><b>Pet Description:</b> {props.product.description}</p>
                <br/>
                <p class="card-text"><b>Skill One:</b> {props.product.skillOne}</p>
                <p class="card-text"><b>Skill Two:</b> {props.product.skillTwo}</p>
                <p class="card-text"><b>Skill Three:</b> {props.product.skillThree}</p>
                <Link to={`/product/${props.product._id}`}><button className="btn btn-primary">Details</button></Link> | <Link to={`/product/update/${props.product._id}`}><button className="btn btn-primary">Edit</button></Link>
            </div>
        </div>
    )
}

export default ProductCard