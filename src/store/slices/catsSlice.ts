import {PayloadAction, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../../api/api";

type PageCategoryId = {
    page: number,
    categoryId: null | number
}

type Cats = {
    id: string,
    url: string
}

type InitialState = {
    cats: Cats[],
    status: null | string,
    error: null | string,
    isLoading: boolean,
    page: number,
    categoryId: null | number
}

const initialState: InitialState = {
    cats: [],
    status: null,
    error: null,
    isLoading: false,
    page: 1,
    categoryId : null
}

export const getCats = createAsyncThunk(
    "cats/getCats",
    async function ({page, categoryId}:PageCategoryId, {rejectWithValue}){
        try {
            let url = `images/search?limit=10&page=${page}`
            if (categoryId) url = `images/search?limit=10&page=${page}&category_ids=${categoryId}`

            const response = await Axios.get(url)

            if (response.status !== 200){
                throw new Error("Server Error")
            }

            return response.data
        }catch (error:any) {
            return rejectWithValue(error.message)
        }
    }
)

const CatsSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
        loadMore(state){
            state.page ++
        },
        getCategoryId(state, action){
            state.categoryId = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCats.pending, state => {
                state.status = "Loading";
                state.isLoading = true
            })
            .addCase(getCats.fulfilled, (state, action:PayloadAction<Cats[]>) => {
                state.status = "Success";
                state.isLoading = false;
                state.cats = action.payload
            })
            .addCase(getCats.rejected, (state, action:PayloadAction<any>)=>{
                state.status = "Rejected";
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export const {loadMore, getCategoryId} = CatsSlice.actions;
export default CatsSlice.reducer;