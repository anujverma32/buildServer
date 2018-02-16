import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'
export const TEST_REQUEST = '@@test/TEST_REQUEST';
export const TEST_SUCCESS = '@@test/TEST_SUCCESS';
export const TEST_FAILURE = '@@test/TEST_FAILURE';
export const test = (data) => {
    return {
        [RSAA]: {
            endpoint: '/test/',
            method: 'POST',
            body: JSON.stringify({ data: data }),
            headers: withAuth({ 'Content-Type': 'application/json' }),
            types: [
                TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE
            ]
        }
    }
}
