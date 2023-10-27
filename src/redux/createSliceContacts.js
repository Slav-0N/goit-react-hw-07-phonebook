import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, deleteContact, addContact } from './operations';

export const changeContactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items - action.payload;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //contacts.filter(contact => {
      //   return contact.name.toLowerCase().includes(filter.toLowerCase());

      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;

        // state.error = action.payload;
      });
  },
});

// export const {
//   addContact,
//   // deleteContact,
//   // fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } = changeContactSlice.actions;
