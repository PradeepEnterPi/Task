import { combineReducers } from 'redux';

import songs from './songs';
import network from './network';


export default combineReducers({
    songs,
    network
});