import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Axios from "../../api/api";

type Categories = {
    id: number,
    name: string
}

type InitialState = {
    categories: Categories[],
    status: null | string,
    error: null | string
}

const initialState: InitialState = {
    categories: [],
    status: null,
    error: null
}

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async function(_, {rejectWithValue}){
        try {
            const response = await Axios.get("categories");

            if (response.status !== 200){
                throw new Error("Server Error")
            }

            return response.data
        }catch (error:any){
            return rejectWithValue(error.message)
        }
    }
)

const CategoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getCategories.pending, state => {
                state.status = "Loading ..."
            })
            .addCase(getCategories.fulfilled, (state, action:PayloadAction<Categories[]>)=> {
                state.status = "Success";
                state.categories = action.payload
            })
            .addCase(getCategories.rejected, (state, action:any)=>{
                state.status = "Rejected";
                alert(state.status)
                state.error = action.payload
            })
    }
})

export default CategoriesSlice.reducer;