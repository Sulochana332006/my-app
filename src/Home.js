import React,{useState,useEffect} from "react";
import "./Home.css";
import tshirt1 from'./Black T-shirt.jpg';
import tshirt2 from'./Green-sweater.jpg';
import tshirt3 from'./Red-hoodie.jpg';
import tshirt4 from'./Blue-jacket.jpg';
import tshirt5 from'./images.png';
import axios from'axios';

const Navbar = () => (
  <nav className="navbar">
    <h2>My Store</h2>
  </nav>
);
const Home = () => {
  const[productData,setproductData]=useState([]);
  async function getData(){
    await axios.get('https://dummyjson.com/products').then((res)=>{setproductData(res.data.products)})
  }
  useEffect(()=>{
    getData();
  },[]);
  
  console.log(productData);
    return (
    <div>
      <navbar/>
      <div className='navbar'>
        <img src={tshirt5} alt="an image"></img>
        <div className='parent'>
        <div className='root'>
          <p>Home</p>
        </div>
        <div className='root2'>
          <p>content</p>
        </div>
        <div className='root3'>
          <p>about</p>
        </div>
        <div className='root4'></div>
        <button>Login</button>
                </div>
      </div>
      <div className='Homepage'>
        <h1>WELCOME TO MY APP</h1>
        <p>This My Home Page</p>
      </div>
     
        <div className="container">
        <div className="card">
          <img src={tshirt1} alt="an image" />
          <h3>Black T-shirt</h3>
          <p>$12</p>
          <button>Add to Cart</button>
        </div>
        <div className="card">
          <img src={tshirt2} alt="an image" />
          <h3>Green-sweater</h3>
          <p>$20</p>
          <button>Add to Cart</button>
        </div>
        <div className="card">
          <img src={tshirt3} alt="an image" />
          <h3>Red-hoodie</h3>
          <p>$15</p>
          <button>Add to Cart</button>
        </div>
        <div className="card">
          <img src={tshirt4} alt="an image" />
          <h3>Blue-jacket</h3>
          <p>$25</p>
          <button>Add to Cart</button>
        </div>
      </div>
      </div>
  );
}
export default Home;
