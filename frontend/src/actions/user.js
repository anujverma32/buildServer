import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'
export const USER_DATA_REQUEST = '@@profile/USER_DATA_REQUEST';
export const USER_DATA_SUCCESS = '@@profile/USER_DATA_SUCCESS';
export const USER_DATA_FAILURE = '@@profile/USER_DATA_FAILURE';
export const GROUP_DATA_REQUEST = '@@profile/GROUP_DATA_REQUEST';
export const GROUP_DATA_SUCCESS = '@@profile/GROUP_DATA_SUCCESS';
export const GROUP_DATA_FAILURE = '@@profile/GROUP_DATA_FAILURE';
export const getProfile = (id) => {
    return {
        [RSAA]: {
            endpoint: '/users/'+id,
            method: 'GET',
            headers: withAuth({ 'Content-Type': 'application/json' }),
            types: [
                USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_DATA_FAILURE
            ]
        }
    }
}