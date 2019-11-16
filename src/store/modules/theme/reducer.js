const localTheme = window.localStorage.getItem('theme');
const INITIAL_STATE = { theme: localTheme || 'dark' };

export default function theme(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@theme/UPDATE': {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    }
    default:
      return state;
  }
}
