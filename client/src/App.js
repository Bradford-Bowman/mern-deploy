import logo from './logo.svg';
import './App.css';
import { Link, Router } from '@reach/router';
import Main from './views/Main';
import AddProduct from './views/AddProduct';
import OneProduct from './views/OneProduct';
import UpdateProduct from './views/UpdateProduct';


function App() {
  return (
    <div className="container-fluid">
      <div className="jumbotron">

        <h1><b>Pet Shelter</b></h1>

        <Link to="/">Back to Home</Link> | <Link to="/product/new">Add a Pet to the Shelter</Link>

        </div>
      
      <Router>

        <Main path="/"></Main>
        <AddProduct path="/product/new"></AddProduct>
        <OneProduct path="/product/:_id"></OneProduct>
        <UpdateProduct path="/product/update/:_id"></UpdateProduct>

      </Router>

    </div>
  );
}

export default App;
