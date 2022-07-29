import { configureStore } from "@reduxjs/toolkit";
import books from './bookSlice'
import auth from "./authSlice";
import report from "./report";

export default configureStore({
    reducer: {
        books,
        auth,
        report,
    }
})
