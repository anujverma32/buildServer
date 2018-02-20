import * as getProfile from '../actions/user'
const initialState = {
    currentUser: undefined,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case getProfile.USER_DATA_SUCCESS:
            return {
                currentUser: action.payload
            }
        default:
            return state
    }
}
export const profileData = (state) => ( state.currentUser )