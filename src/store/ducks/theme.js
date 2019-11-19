import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  toogle: [''],
});

const INITIAL_STATE = window.localStorage.getItem('theme') || 'dark';

const toogle = (state = INITIAL_STATE) => {
  const theme = state === 'light' ? 'dark' : 'light';
  window.localStorage.setItem('theme', theme);
  return theme;
};

export default createReducer(INITIAL_STATE, {
  [Types.TOOGLE]: toogle,
});
