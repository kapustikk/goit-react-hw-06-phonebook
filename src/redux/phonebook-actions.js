import { createAction } from '@reduxjs/toolkit';
// import types from './phonebook-types';
import shortid from 'shortid';

export const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('phonebook/changeFilter');

// export const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     },
// });

// export const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// export const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });
