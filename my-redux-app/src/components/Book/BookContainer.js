import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, deleteBook, getBook } from '../../store/bookSlice';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';

const PostContainer = () => {
  const {isLoading, books, bookInfo} = useSelector(( state ) =>state.books)
  const {isloagedIn} = useSelector( (state) => state.auth )
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(getBooks())
  }, [dispatch] )
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList 
          isLoading= {isLoading} 
          books={books} 
          isloagedIn= {isloagedIn} 
          deleteBook = {deleteBook}
          dispatch={dispatch}
          getBook= {getBook}
          
          />
        </div>
        <div className='col side-line'>
          <BookInfo bookInfo = {bookInfo}/>
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
