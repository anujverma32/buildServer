import * as server from '../actions/server'
const initialState = {
    serverList: [],
    server: {},
    error: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case server.SERVER_LIST_SUCCESS:
            console.log("reducer", action.payload)
            return {
                ...state,
                serverList: action.payload
            }
        default:
            return state
    }
}
export const serverList = (state) => (state.serverList)