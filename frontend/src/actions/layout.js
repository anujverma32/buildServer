export const LAYOUT_TOGGLE_SIDEBAR = '@@layout/TOGGLE_SIDEBAR';

export const toggleSidebar = (currStatus) => ({
    type: LAYOUT_TOGGLE_SIDEBAR,
    payload: !currStatus
})
