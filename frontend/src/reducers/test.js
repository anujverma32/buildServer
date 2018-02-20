import * as test from '../actions/test'
const initialState = {
    data: ""
}
export default (state = initialState, action) => {
    switch (action.type) {
        case test.TEST_SUCCESS:
            return {
                data: action.payload.public_key
            }
        default:
            return state
    }
}
export const testResponse = (state) => (state.data)
