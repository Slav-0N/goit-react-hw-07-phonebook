import { configureStore } from '@reduxjs/toolkit';
import { changeContactSlice } from './createSliceContacts';
import { addFilterSlice } from './createSliceFilter';

export const store = configureStore({
  reducer: {
    contacts: changeContactSlice.reducer,
    filter: addFilterSlice.reducer,
  },
});
