import React, { useState, useEffect } from 'react';


const Form = (props) => {
    return (
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <form onSubmit={props.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="title">Pet Name:</label>
                        <input type="text" name="title" className="form-control" onChange={props.onChangeHandler} value={props.form.title}/>
                        {
                            props.error.title ? <span className="text-danger">{props.error.title.message}</span> : ""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Pet Type:</label>
                        <input type="text" name="type" className="form-control" onChange={props.onChangeHandler} value={props.form.type}/>
                        {
                            props.error.type ? <span className="text-danger">{props.error.type.message}</span> : ""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Pet Description:</label>
                        <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description}/>
                        {
                            props.error.description ? <span className="text-danger">{props.error.description.message}</span> : ""
                        }
                    </div>
                    <br/><br/>
                    <h6>Skills (optional):</h6>
                    <div className="form-group">
                        <label htmlFor="skillOne">Skill 1:</label>
                        <input type="text" name="skillOne" className="form-control" onChange={props.onChangeHandler} value={props.form.skillOne}/>
                        {
                            props.error.skillOne ? <span className="text-danger">{props.error.skillOne.message}</span> : ""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="skillTwo">Skill 2:</label>
                        <input type="text" name="skillTwo" className="form-control" onChange={props.onChangeHandler} value={props.form.skillTwo}/>
                        {
                            props.error.skillTwo ? <span className="text-danger">{props.error.skillTwo.message}</span> : ""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="skillThree">Skill 3:</label>
                        <input type="text" name="skillThree" className="form-control" onChange={props.onChangeHandler} value={props.form.skillThree}/>
                        {
                            props.error.skillThree ? <span className="text-danger">{props.error.skillThree.message}</span> : ""
                        }
                    </div>
                    <br/><br/>
                    <input type="submit" value="Add Pet" className="btn btn-primary"/>
                    <br/><br/>
                </form>
            </div>
        </div>
    );
};



export default Form;