import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './phonebook-actions';
// import types from './phonebook-types';

const initialContacts = [
  { id: 'id-1', name: 'Mummy', number: '111111111' },
  { id: 'id-2', name: 'Daddy', number: '222222222' },
  { id: 'id-3', name: 'Bu', number: '333333333' },
  { id: 'id-4', name: 'Alex', number: '444444444' },
];

const items = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

// const items = (state = initialContacts, { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [payload, ...state];

//         case types.DELETE:
//             return state.filter(({ id }) => id !== payload);

//         default:
//             return state;
//     }
// };

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;

//         default:
//             return state;
//     }
// };

export default combineReducers({
  items,
  filter,
});
