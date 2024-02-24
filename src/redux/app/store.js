import { configureStore } from '@reduxjs/toolkit';
import relatedVideoReducer from '../features/relatedVideos/relatedVideosSlice';
import tagsReducer from '../features/tags/tagsSlice';
import videoReducer from '../features/video/videoSlice';
import videosReducer from '../features/videos/videosSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        video: videoReducer,
        tags: tagsReducer,
        relatedVideos: relatedVideoReducer,
        filter: filterReducer
    }
})

