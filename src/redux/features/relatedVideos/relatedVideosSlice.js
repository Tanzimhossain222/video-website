
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRelatedVideos } from './relatedVideosAPI';

const initialState = {
    relatedVideos: {},
    isLoading: false,
    isError: false,
    error: ''
}

// Create a thunk to fetch videos
export const fetchRelatedVideo = createAsyncThunk('relatedVideo/fetchVideo', async (tags,id) => {
    const relatedVideos = await getRelatedVideos({tags,id});
    return relatedVideos;
})

const relatedVideoSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideo.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = action.payload;
            })
            .addCase(fetchRelatedVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.relatedVideos = [];
            })
    }
})

export default relatedVideoSlice.reducer;
