import * as Types from './types';

var initialState = {
    rows: [],
    rowSelected: [],
    showModalCreateOrUpdate: false,
    rowEditing: {},
    isView: false,
    idMax: 0
};

//Reset lại giá trị về ban đầu
const resetValueInitial = (state) => {
    state.showModalCreateOrUpdate = initialState.showModalCreateOrUpdate;
    state.rowEditing = initialState.rowEditing;
    state.isView = initialState.isView;
    return state;
}

// check row
const funcCheckRow = (arrValue) => {
    let newSelected = [];
    let selectedIndex = -1;
    if (arrValue && arrValue.length > 0) {
        arrValue.map(item => {
            selectedIndex = newSelected.indexOf(item);
            if (selectedIndex === -1) {
                newSelected.push(item);
            } else {
                newSelected.splice(selectedIndex, 1);
            }
        });
    }
    return newSelected;
}

//Xóa dữ liệu
const funcDeleteRow = (state, id) => {
    let findIndex = state.rows.findIndex(m => m.id == id);
    if (findIndex != -1) {
        state.rows.splice(findIndex, 1);
        state.rows = [...state.rows];
    }
    return state;
}

//Sửa lại giá trị để hiển thị
const customValueRowEditing = (state, id) => {
    state.showModalCreateOrUpdate = true;
    state.rowEditing = { ...state.rows.find(m => m.id == id) };
    return state;
}

const reducer = (state = initialState, action) => {
    let findIndex = -1;
    switch (action.type) {
        //#region   Table
        case Types.CHECK_ROW:
            state.rowSelected = funcCheckRow(action.value);
            break;

        case Types.READ_ROW_ALL:
            state.rows = action.rows;
            state.rowSelected = [];
            break;

        case Types.CREATE_ROW:
            state.showModalCreateOrUpdate = true;
            break;

        case Types.UPDATE_ROW:
            state = customValueRowEditing(state, action.id);
            state.isView = false;
            break;

        case Types.DELETE_ROW:
            state = funcDeleteRow(state, action.id)
            state.rowSelected = [];
            state = resetValueInitial(state);
            break;

        case Types.DELETE_MULTI_ROW:
            action.ids.forEach(id => {
                state = funcDeleteRow(state, id);
            });
            state.rowSelected = [];
            state = resetValueInitial(state);
            break;

        case Types.VIEW_ROW:
            state = customValueRowEditing(state, action.id);
            state.isView = true;
            break;

        case Types.CLOSE_CREATE_OR_UPDATE:
            state = resetValueInitial(state);
            break;

        case Types.CREATE_SUCCESS:
            state.rows = [...state.rows, action.value];
            state = resetValueInitial(state);
            break;

        case Types.UPDATE_SUCCESS:
            findIndex = state.rows.findIndex(m => m.id == action.value.id);
            if (findIndex != -1) {
                state.rows[findIndex] = { ...action.value };
            }
            state.rows = [...state.rows];
            state = resetValueInitial(state);
            break;

        //#endregion        
    }
    return { ...state };
}

export default reducer