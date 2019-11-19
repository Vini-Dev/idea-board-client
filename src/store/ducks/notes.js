import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  add: ['note'],
  updatePosition: ['_id', 'left', 'top'],
  updateValue: ['_id', 'title', 'text'],
  remove: ['_id'],
});

const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, { note }) => [...state, ...note];

const updatePosition = (state = INITIAL_STATE, { _id, left, top }) =>
  state.map(note => ({
    ...note,
    ...(note._id === _id
      ? {
          top,
          left,
          zindex: state.length,
        }
      : { zindex: note.zindex > 2 ? note.zindex - 1 : note.zindex }),
  }));

const updateValue = (state = INITIAL_STATE, { _id, title, text }) =>
  state.map(note => ({
    ...note,
    ...(note._id === _id
      ? {
          title,
          text,
          zindex: state.length,
        }
      : { zindex: note.zindex > 2 ? note.zindex - 1 : note.zindex }),
  }));

const remove = (state = INITIAL_STATE, { _id }) =>
  state.filter(note => note._id !== _id);

export default createReducer(INITIAL_STATE, {
  [Types.ADD]: add,
  [Types.UPDATE_POSITION]: updatePosition,
  [Types.UPDATE_VALUE]: updateValue,
  [Types.REMOVE]: remove,
});
