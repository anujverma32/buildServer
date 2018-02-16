import * as test from '../actions/test'
const initialState = {
    data: ""
}
export default (state = initialState, action) => {
    switch (action.type) {
        case test.TEST_SUCCESS:
            return {
                data: action.payload.data
            }
        default:
            return state
    }
}
export const testResponse = (state) => (state.data)
