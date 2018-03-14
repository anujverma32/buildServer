import * as layout from '../actions/layout'
const initialState = {
    isSidebarOpen: true
}
export default (state = initialState, action) => {
    switch (action.type) {
        case layout.LAYOUT_TOGGLE_SIDEBAR:
            return {
                isSidebarOpen: action.payload
            }
        default:
            return state
    }
}
export const isSidebarOpen = (state) => (state.isSidebarOpen)
