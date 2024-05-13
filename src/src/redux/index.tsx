import {configureStore} from '@reduxjs/toolkit';
import textInputReducer1, {
  textInputSelector1,
  setTextInput1,
} from './features/textInput1/textInputSlice1';
import textInputReducer2, {
  textInputSelector2,
  setTextInput2,
} from './features/textInput2/textInputSlice2';

const store = configureStore({
  reducer: {
    textInput1: textInputReducer1,
    textInput2: textInputReducer2,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export {
  store,
  textInputSelector1,
  setTextInput1,
  textInputSelector2,
  setTextInput2,
};
export type {RootState, AppDispatch};
