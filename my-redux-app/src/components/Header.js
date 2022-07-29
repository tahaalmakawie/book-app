import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInOut } from '../store/authSlice';

const Header = () => {
  const {error} = useSelector((state) => state.books)
  const {isloagedIn} = useSelector( (state) => state.auth )
  const dispatch = useDispatch()
  return (
    <Fragment>

      {error&& 
        (<div class='alert alert-denger'>
        {error}
      </div>)
    }
      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button className='btn btn-outline-primary' type='submit' onClick={() => dispatch(logInOut())}>
          {isloagedIn ? 'log out' : 'log in'}

        </button>
      </nav>
    </Fragment>
  );
};

export default Header;
