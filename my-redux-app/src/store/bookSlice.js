import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInsert } from "./report";

export const getBooks = createAsyncThunk( 'book/getBooks', async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try{
        const res = await fetch('http://localhost:3005/books');
        const data = await res.json();
        
        return data
    }catch(error){ 
        return rejectWithValue(error.message)
    }
} )

export const insertBook = createAsyncThunk('book/isertBook', 
async( bookData , thunkAPI) =>{
    const {rejectWithValue, getState, dispatch} = thunkAPI
    try{
        bookData.userName = getState().auth.name
        const res = await fetch('http://localhost:3005/books', {
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        const data = await res.json();
        dispatch(logInsert( {name: 'insertBook', status: 'success' } ))
        return data
    }catch(error){
        dispatch(logInsert( {name: 'insertBook', status: 'failed' } ))
        return rejectWithValue(error.message)
    }
})

//delet

export const deleteBook = createAsyncThunk(
    'book/deleteBook', 
    async( item , thunkAPI) =>{
    const {rejectWithValue} = thunkAPI
    try{
         await fetch(`http://localhost:3005/books/${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        
        return item
    }catch(error){
    return rejectWithValue(error.message)
    }
})

// getBook
export const getBook = createAsyncThunk(
    'book/getBook', 
    async( item , thunkAPI) =>{
    const {rejectWithValue} = thunkAPI
    try{
         await fetch(`http://localhost:3005/books/${item.id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        
        return item
    }catch(error){
    return rejectWithValue(error.message)
    }
})

const bookSlice = createSlice( {
    name: 'book',
    initialState: { books: [], isLoading: false, isError: null, bookInfo: null },
    extraReducers: {
        // getBooks
        [getBooks.pending]: (state, action) => {
            state.isLoading = true
            state.isError = null
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false
            state.books = action.payload;
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        // insertBooks
        
        [insertBook.pending]: (state, action) =>{
            state.isLoading = true
            state.isError = null
        },
        [insertBook.fulfilled]: (state, action) =>{
            state.isLoading = false
            state.books.push(action.payload)
        },
        [insertBook.rejected]: (state, action) =>{
            state.isLoading = false
            state.isError = action.payload
        },

        //Delete

        [deleteBook.pending]: (state, action) =>{
            state.isLoading = true
            state.isError = null
        },
        [deleteBook.fulfilled]: (state, action) =>{
            state.isLoading = false
            state.books = state.books.filter( (el) => el.id !== action.payload.id )
            
        },
        [deleteBook.rejected]: (state, action) =>{
            state.isLoading = false
            state.isError = action.payload
        },

        // getBook

        [getBook.pending]: (state, action) =>{
            state.isLoading = true
            state.isError = null
        },
        [getBook.fulfilled]: (state, action) =>{
            state.isLoading = false
            state.bookInfo = action.payload
            console.log(action.payload);
            
        },
        [getBook.rejected]: (state, action) =>{
            state.isLoading = false
            state.isError = action.payload
        },
    }
} )

export default bookSlice.reducer