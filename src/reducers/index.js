import { combineReducers } from 'redux';
import { libraryReducer as LibraryReducer } from './libraryReducer';

export default combineReducers({
  libraries: LibraryReducer
});
