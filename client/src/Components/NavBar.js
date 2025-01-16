
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../utils/Cartslice';
import "../Style/navBar.css";

const NavBar = () => {
  const [searchText, setSearchText] = useState('abc');
  const [text, setText] = useState('');
  const [productData, setProductData] = useState(null);

  const navigate = useNavigate();
  const selector = useSelector(store => store);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
    const json = await data.json();
    setProductData(json.products);

    if (searchText === "abc") return;

    navigate('/searchedProduct', { state: { productData: json.products } });
  }

  useEffect(() => {
    fetchData();
  }, [searchText])

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(toggle());
    navigate('/login');
  };

  return (
    <div className='nav-bar'>
      <div className='nav-1'>
        <Link to="/">
          <img 
            src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
            alt="logo"
          ></img>
        </Link>
      </div>

      <div className='nav-2'>
        <input
          placeholder='Search'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13)
              setSearchText(text);
          }}
        >
        </input>
      </div>

      <div className='nav-3'>
        <Link to="/cart">
          <img 
            className='cart'
            src="https://i.pinimg.com/736x/23/6d/26/236d26cf9c7c880127ae69126100b577.jpg"
            alt="cart-logo"
          >
          </img>
        </Link>
        <Link to="/orderedproducts">
          <button className='nav-button'>Ordered Products</button>
        </Link>
        <Link to="/refundedproducts">
          <button className='nav-button'>Refunded Products</button>
        </Link>
        {
          selector?.cart?.flag ? (
            <div className='buttons'>
              <Link to="/signup">
                <button className='nav-button'>Sign Up</button>
              </Link>
              <Link to="/login">
                <button className='nav-button'>Login</button>
              </Link>
            </div>
          ) 
          :
          (
            <div className='buttons'>
              <button
                onClick={handleLogout}
                className='nav-button'
              >
                Logout
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NavBar;
