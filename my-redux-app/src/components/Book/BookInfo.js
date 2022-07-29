import React, { Fragment } from 'react';

const BookInfo = ({bookInfo}) => {
  
  // const getBook = bookInfo ? bookInfo.map( (book) => (

  // ) )
  // :

  return (
    <Fragment>
    <h2>Book Details</h2>
    {bookInfo ? 
      // bookInfo.map( (det) => (

        <div >
          
          <h4 
          style={{color: '#fff', backgroundColor: '#777', padding: '3px 10px', 
          borderRadius:'6px', 
          marginLeft:'10px',
        }}
          className='fw-bold' >Title: {bookInfo.title}</h4>

          <h5
          style={{color: '#fff', backgroundColor: '#777', padding: '3px 10px', 
          borderRadius:'6px', 
          marginLeft:'10px',
        }}
          className='fw-bold'>Auther: {bookInfo.userName} </h5>
          <h5 
          style={{color: '#fff', backgroundColor: '#777', padding: '3px 10px', 
          borderRadius:'6px', 
          marginLeft:'10px',
          maxWidth:'700px',
          maxHeight:'400px',
          boxSizing:'border-box'
        }}
            className='fw-light'>Description: {bookInfo.disc}</h5>

          <h5 
          style={{color: '#fff', backgroundColor: '#777', padding: '3px 10px', 
          borderRadius:'6px', 
          marginLeft:'10px',
        }}
          className='fst-italic'>Price: <span style={{color:'gold'}} color='goald'>{bookInfo.price}$</span></h5>
        </div>
      // ))
    :
    <div className='alert alert-secondary' role='alert'>
    There is no post selected yet. Please select!
  </div>
    }



    </Fragment>
  );
};

export default BookInfo;
