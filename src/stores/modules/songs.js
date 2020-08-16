import api from '../../helpers/ApiClient';

const SONGS = 'SONGS';
const SONGS_SUCCESS = 'SONGS_SUCCESS';
const SONGS_FAIL = 'SONGS_FAIL';


const initialState = {
    isLoading: false,
    ErorMessage: undefined,
    songsData: undefined
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case SONGS: {
            return { ...state, isLoading: true, ErorMessage: undefined };
        }

        case SONGS_SUCCESS: {
            return { ...state, isLoading: false, songsData: action.result, ErorMessage: undefined };
        }

        case SONGS_FAIL: {
            return { ...state, isLoading: false, ErorMessage: 'No Songs Available' };
        }

        default:
            return state;
    }
}

//--------------------
// songsList api call here
//--------------------

export function songsList(data) {
    return (dispatch, getState) => new Promise((resolve, reject) => {
        dispatch({ type: SONGS });
        api.post('/search', data).then((res) => {
        if(res.resultCount>0){
            dispatch({ type: SONGS_SUCCESS, result: res.results });
        }
        resolve(res);
        }).catch((err) => {
            dispatch({ type: SONGS_FAIL });
            reject();
        });
    });
}