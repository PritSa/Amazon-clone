import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from "./StateProvider"

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='header'>
          <Link to="/">
            <img className='header_logo' 
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" 
            alt="Amazon Logo" />
         </Link>

        <div className="header_search">
            <input className="header_serachInput"
            type="text" />
            <SearchIcon className="header_searchIcon"/>
            {/* Logo */}
        </div>

        <div className="header_nav">
        <Link to='/login'>
        <div className="header_option">
           <span className="header_opetionLineOne"> Hello, Guest</span>
           <span className="header_optionLineTwo">Sign In</span> 
        </div>
        </Link>

        <div className="header_option">
           <span className="header_opetionLineOne"> Returns</span>
           <span className="header_optionLineTwo">Orders</span> 
        </div>

        <div className="header_option">
           <span className="header_opetionLineOne">Your</span>
           <span className="header_optionLineTwo">Prime</span> 
        </div>
      
        <Link to="/checkout">
        <div className="header_optionBasket">
            <ShoppingBasketIcon/>  
            <span className="header_optionLineTwo header_basketCount">{basket.length}</span> 
        </div>
        </Link>

        </div>
        </div>
    )
}

export default Header
