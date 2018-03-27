import * as server from '../actions/server'
const initialState = {
    serverList: [],
    server: {},
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case server.SERVER_LIST_SUCCESS:
            return {
                ...state,
                serverList: action.payload
            }
        case server.SERVER_SETTINGS_SUCCESS:
            return {
                ...state,
                server: action.payload
            }
        default:
            return state
    }
}
export const serverList = (state) => (state.serverList)
export const serverSettings = (state) => (state.server)