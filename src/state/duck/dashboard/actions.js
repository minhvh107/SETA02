import * as Types from './types';

export const actChangeOpened = (props, opened) => {
    return {
        type: Types.CHANGE_OPENED,
        opened
    }
}

export const actToggleDrawer = (props, opened) => {
    return {
        type: Types.TOGGLE_DRAWER,
        opened
    }
}

export const actToggleNotifications = (props, notificationsOpen) => {
    return {
        type: Types.TOGGLE_NOTIFICATION,
        notificationsOpen
    }
}

export const actToggleTheme = (props) => {
    return {
        type: Types.TOGGLE_THEME
    }
}

export const actToggleDirection = (props) => {
    return {
        type: Types.TOGGLE_DIRECTION
    }
}

export const actToggleSpeedDial = (props, openSpeedDial) => {
    return {
        type: Types.TOGGLE_SPEED_DIAL,
        openSpeedDial
    }
}