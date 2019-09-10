import * as Types from './types';
import { confirmNotice, notifyError, notifySuccess, sortDesc } from '@basesShared/common';
import {
    MESS_READ_FAIL,
    MESS_CREATE_SUCCESS, MESS_UPDATE_SUCCESS, MESS_DELETE_SUCCESS
} from '@constants/TextConstants';
import { DataService } from '@utils';
import { PostApi } from '@constants/ApiConstants';

export const actCheckRow = (props, value) => {
    return {
        type: Types.CHECK_ROW,
        value
    }
}

export const actReadRow = (props) => {
    return dispatch => {
        return DataService.get(PostApi.GetAll).then(
            rows => dispatch({
                type: Types.READ_ROW_ALL,
                rows
            }),
            error => {
                if (error)
                    notifyError({ text: MESS_READ_FAIL });
                return error;
            }
        );
    }
}

export const actCreateRow = (props) => {
    return {
        type: Types.CREATE_ROW
    }
}

export const actUpdateRow = (props, id) => {
    return {
        type: Types.UPDATE_ROW,
        id
    }
}

export const actDeleteRow = (props, ids) => {
    return dispatch => {
        confirmNotice({}, () => {
            if (ids.length > 1) {
                dispatch({
                    type: Types.DELETE_MULTI_ROW,
                    ids
                });
                notifySuccess({ text: MESS_DELETE_SUCCESS });
            } else {
                dispatch({
                    type: Types.DELETE_ROW,
                    id: ids
                });
                notifySuccess({ text: MESS_DELETE_SUCCESS });
            }

        });
    };
}

export const actViewRow = (props, id) => {
    return {
        type: Types.VIEW_ROW,
        id
    }
}

export const actCloseCreateOrUpdate = (props) => {
    return {
        type: Types.CLOSE_CREATE_OR_UPDATE
    }
}

export const actSaveCreateOrUpdate = (props, value) => {
    return async (dispatch, getState) => {
        if (value.id && value.id != Guid.EMPTY) {
            dispatch({
                type: Types.UPDATE_SUCCESS,
                value
            });
            notifySuccess({ text: MESS_UPDATE_SUCCESS });
        } else {
            var lstPosts = getState().ContentsReducer.PostReducer.rows;
            lstPosts.sort(sortDesc);
            if (lstPosts.length > 0)
                value.id = lstPosts[0].id + 1;
            else
                value.id = 1;
            dispatch({
                type: Types.CREATE_SUCCESS,
                value
            });
            notifySuccess({ text: MESS_CREATE_SUCCESS });
        }
    };
}