
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAPI';

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

// Create a thunk to fetch videos
export const fetchVideos = createAsyncThunk('videos/fetchvideos', async () => {
    const videos = await getVideos();
    return videos;
})

const videoSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.videos = [];
            })
    }
})

export default videoSlice.reducer;
