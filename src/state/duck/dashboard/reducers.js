import * as Types from './types';

const initialize = {
    opened: true,
    notificationsOpen: false,
    type: 'light',
    direction: 'ltr',
    openSpeedDial: false,
    cnHub:''
};

function resizeDispatch() {
    if (typeof (Event) === 'function') {
        window.dispatchEvent(new Event('resize'));
    } else {
        const evt = window.document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
    }
}

const reducer = (state = initialize, action) => {
    switch (action.type) {
        case Types.CHANGE_OPENED:
            return { ...state, opened: action.opened };

        case Types.TOGGLE_DRAWER:
            resizeDispatch();
            return { ...state, opened: !action.opened };

        case Types.TOGGLE_NOTIFICATION:
            state.notificationsOpen = !action.notificationsOpen
            return { ...state };

        case Types.TOGGLE_THEME:
            return { ...state, type: state.type === 'light' ? 'dark' : 'light' }

        case Types.TOGGLE_DIRECTION:
            state.direction = state.direction === 'ltr' ? 'rtl' : 'ltr'
            document.body.dir = state.direction;
            return { ...state }

        case Types.TOGGLE_SPEED_DIAL:
            return { ...state, openSpeedDial: action.openSpeedDial }

        default:
            return state;
    }
}

export default reducer;