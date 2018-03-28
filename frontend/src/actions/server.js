import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'
export const SERVER_LIST_REQUEST = '@@server/SERVER_LIST_REQUEST';
export const SERVER_LIST_SUCCESS = '@@server/SERVER_LIST_SUCCESS';
export const SERVER_LIST_FAILURE = '@@server/SERVER_LIST_FAILURE';
export const SERVER_SETTINGS_REQUEST = '@@server/SERVER_SETTINGS_REQUEST';
export const SERVER_SETTINGS_SUCCESS = '@@server/SERVER_SETTINGS_SUCCESS';
export const SERVER_SETTINGS_FAILURE = '@@server/SERVER_SETTINGS_FAILURE';
export const UPDATE_SERVER_REQUEST = '@@server/UPDATE_SERVER_REQUEST';
export const UPDATE_SERVER_SUCCESS = '@@server/UPDATE_SERVER_SUCCESS';
export const UPDATE_SERVER_FAILURE = '@@server/UPDATE_SERVER_FAILURE';
export const CREATE_SERVER_REQUEST = '@@server/CREATE_SERVER_REQUEST';
export const CREATE_SERVER_SUCCESS = '@@server/CREATE_SERVER_SUCCESS';
export const CREATE_SERVER_FAILURE = '@@server/CREATE_SERVER_FAILURE';
export const DELETE_SERVER_REQUEST = '@@server/DELETE_SERVER_REQUEST';
export const DELETE_SERVER_SUCCESS = '@@server/DELETE_SERVER_SUCCESS';
export const DELETE_SERVER_FAILURE = '@@server/DELETE_SERVER_FAILURE';
export const getServerList = () => {
    return {
        [RSAA]: {
            endpoint: '/servers/',
            method: 'GET',
            headers: withAuth({ 'Content-Type': 'application/json' }),
            types: [
                SERVER_LIST_REQUEST, SERVER_LIST_SUCCESS, SERVER_LIST_FAILURE
            ]
        }
    }
}
export const createServer = (settings) => {
    return {
        [RSAA]: {
            endpoint: '/servers/',
            method: 'POST',
            body: JSON.stringify(settings),
            headers: withAuth({ 'Content-Type': 'application/json' }),
            types: [
                CREATE_SERVER_REQUEST, CREATE_SERVER_SUCCESS, CREATE_SERVER_FAILURE
            ]
        }
    }
}
export const getServer = (id) => {
    return {
        [RSAA]: {
            endpoint: '/servers/' + id,
            method: 'GET',
            headers: withAuth({ 'Content-Type': 'application/json' }),
            types: [
                SERVER_SETTINGS_REQUEST, SERVER_SETTINGS_SUCCESS, SERVER_SETTINGS_FAILURE
            ]
        }
    }
}
export const updateServer = (settings) => {
    return {
        [RSAA]: {
            endpoint: '/servers/' + settings.id,
            method: 'PUT',
            body: JSON.stringify(settings),
            headers: withAuth({ 'Content-Type': 'application/json' }),
            types: [
                UPDATE_SERVER_REQUEST, UPDATE_SERVER_SUCCESS, UPDATE_SERVER_FAILURE
            ]
        }
    }
}
export const deleteServer = (id) => {
    return {
        [RSAA]: {
            endpoint: '/servers/' + id,
            method: 'DELETE',
            headers: withAuth({ 'Content-Type': 'application/json' }),
            types: [
                DELETE_SERVER_REQUEST, DELETE_SERVER_SUCCESS, DELETE_SERVER_FAILURE
            ]
        }
    }
}