import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productsSlice } from "./features/tasks/productsSlice";

export const store  = configureStore({
    reducer: {
        productsList : productsSlice.reducer
    },
})


export const useAppDispatch : ()=> typeof store.dispatch=useDispatch ;
export const useApplicationSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector ;