
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTags } from './tagsAPI';

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ''
}

// Create a thunk to fetch Tags
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const Tags = await getTags();
    return Tags;
})

const TagSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tags = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.tags = [];
            })
    }
})

export default TagSlice.reducer;
