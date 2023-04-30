import { readMeApi } from '../services/readME.query';
import { reposApi } from '../services/repos.query';
import profileReducer from './profile/profileInfoSlice';
import counterReducer from './repos/repositoriesSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit'


const rootReducer = combineReducers({
  counterReducer,
  profileReducer,
  [reposApi.reducerPath]: reposApi.reducer,
  [readMeApi.reducerPath]: readMeApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([reposApi.middleware, readMeApi.middleware]),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch