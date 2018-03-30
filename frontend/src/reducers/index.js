import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import auth, * as fromAuth from './auth'
import test, * as fromTest from './test'
import profile, * as fromProfile from './user'
import layout, * as fromLayout from './layout'
import server, * as fromServer from "./server";

export default combineReducers({
    auth: auth,
    test: test,
    profile: profile,
    layout: layout,
    server: server,
    router: routerReducer
})

export const currentUser =
    state => fromAuth.currentUser(state.auth)
export const isAuthenticated =
    state => fromAuth.isAuthenticated(state.auth)
export const accessToken =
    state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired =
    state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken =
    state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired =
    state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors =
    state => fromAuth.errors(state.auth)
export const testResponse =
    state => fromTest.testResponse(state.test)
export const profileData = 
    state => fromProfile.profileData(state.profile)
export const isSidebarOpen =
    state => fromLayout.isSidebarOpen(state.layout)
export const serverList =
    state => fromServer.serverList(state.server)
export const serverSettings =
    state => fromServer.serverSettings(state.server)

export function withAuth(headers = {}) {
    return (state) => ({
        ...headers,
        'Authorization': `Bearer ${accessToken(state)}`
    })
}
