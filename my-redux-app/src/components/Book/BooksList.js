import React from 'react';

const BooksList = ({isLoading, books, isloagedIn, deleteBook, dispatch, getBook}) => {
  
  const bookList = 
  // books.length > 0 ?
  books.map( (item) => (
  
    <li className='list-group-item d-flex  justify-content-between align-items-center' key={item.id}>
    
      <div>{item.title}</div>
      <div className='btn-group' role='group'>
        <button type='button' className='btn btn-primary' disabled= {!isloagedIn} onClick={() => dispatch(getBook(item))
          .unwrap()
          .then((originalPromiseResult) => {
            console.log(originalPromiseResult);
          })
          .catch((rejectedValueOrSerializedError) => {
            // handle error here
            console.log(rejectedValueOrSerializedError);
          }) 
        }>
          Read
        </button>
        <button type='button' className='btn btn-danger' disabled={!isloagedIn} 
        onClick={() => dispatch(deleteBook(item))
          .unwrap()
          .then((originalPromiseResult) => {
            console.log(originalPromiseResult);
          })
          .catch((rejectedValueOrSerializedError) => {
            // handle error here
            console.log(rejectedValueOrSerializedError);
          }) 
      }>
          Delete
        </button>
      </div>
  </li>
   ) )
  //  : 'there is book avilable '


  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? 'loading...' : <ul className='list-group'> {bookList} </ul>}
    </div>
  );
}; 

export default BooksList;
