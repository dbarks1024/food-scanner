import { combineReducers } from 'redux';
import ScannerReducer from './ScannerReducer';

export default combineReducers({
    scanner: ScannerReducer 
});
