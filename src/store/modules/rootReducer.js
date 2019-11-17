import { combineReducers } from 'redux';

import theme from './theme/reducer';
import notes from './notes/reducer';

export default combineReducers({
  theme,
  notes,
});
