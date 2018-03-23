import * as server from '../actions/server'
const initialState = {
    serverList: undefined,
    server: undefined,
    error: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case server.SERVER_LIST_SUCCESS:
            console.log(action.payload)
            return {
                serverList: action.payload
            }
        default:
            return state
    }
}
export const serverList = (state) => (state.serverList)