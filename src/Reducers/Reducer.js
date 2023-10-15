import { createReducer } from "@reduxjs/toolkit";

export const DataReducer = createReducer({}, {
    request : (state) => {
        state.loading = true;
    },
    success : (state, action) => {
        state.loading = false;
        state.allTickets = action.payload.tickets;
        state.allUser = action.payload.users;
    },
   failure : (state) => {
        state.loading = false;
        state.allTickets = []
        state.allUser = [];
    },
});

export const SelectDataReducer = createReducer({}, {
    data_get : (state) => {
        state.loading = true;
        state.selectedData = [];
    },
    data_success : (state, action) => {
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user
    },
    data_failure : (state, action) => {
        state.loading = false;
        state.selectedData = []
        state.message = action.payload.message
    },
});