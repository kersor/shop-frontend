import { configureStore } from '@reduxjs/toolkit'
import { rootApi } from './rootApi'
import { authMiddleware } from './middleware/auth'

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(rootApi.middleware)
  .concat(authMiddleware.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch