import {combineReducers} from 'redux';
import page from './pageReducer';
import menu from './menuReducer';
import admin from './adminPanelReducer';

export default combineReducers({
    page,
    menu,
    admin
})