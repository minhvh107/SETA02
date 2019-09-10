//#region   Text control
export const TEXT_CREATE = "Thêm";
export const TEXT_READ = "Xem";
export const TEXT_UPDATE = "Sửa";
export const TEXT_DELETE = "Xóa";
export const TEXT_VIEW = "Xem";
export const TEXT_COLUMN = "Cột";
export const TEXT_DELETE_MULTI = "Xóa nhiều";
export const TEXT_SAVE_CREATE = "Lưu";
export const TEXT_SAVE_UPDATE = "Cập nhật";
export const TEXT_CLOSE_DIALOG = "Đóng";
export const TEXT_ROWS_EMPTY = "Không có dữ liệu";
//#endregion

//#region   Text Field
export const TEXT_ID = "Id";
export const TEXT_CONTENT = "Nội dung";
//#endregion

//#region   Text Replace
export const REPLACE_TITLE_READ = (text) => "Danh sách " + text;
export const REPLACE_TITLE_CREATE = (text) => "Thêm " + text;
export const REPLACE_TITLE_UPDATE = (text) => "Sửa " + text;
export const REPLACE_TITLE_DELETE = (text) => "Xóa " + text;
export const REPLACE_TITLE_VIEW = (text) => "Xem " + text;

export const REPLACE_TITLE_DIALOG = (text, isView, rowEditing) => {
    if (isView)
        return REPLACE_TITLE_VIEW(text);
    if (rowEditing.id)
        return REPLACE_TITLE_UPDATE(text);
    else
        return REPLACE_TITLE_CREATE(text);
};

export const REPLACE_NAME = (text) => "Tên " + text;
export const REPLACE_CODE = (text) => "Mã " + text;

//#endregion

//#region   Message Notify
export const MESS_CREATE_SUCCESS = "Thêm dữ liệu thành công";
export const MESS_CREATE_FAIL = "Thêm dữ liệu thất bại";

export const MESS_UPDATE_SUCCESS = "Cập nhật dữ liệu thành công";
export const MESS_UPDATE_FAIL = "Cập nhật dữ liệu thất bại";

export const MESS_DELETE_SUCCESS = "Xóa dữ liệu thành công";
export const MESS_DELETE_FAIL = "Xóa dữ liệu thất bại";

//#endregion

//#region   Message Validate
export const MESS_ERR_REQUIRED = "Dữ liệu không được để trống";
export const MESS_ERR_NUMBER = "Chỉ được nhập kí tự số";
export const MESS_ERR_ALPHANUMBER = "Chỉ được nhập kí tự chữ và số";
export const MESS_ERR_MAX_LENGTH = "Chỉ được nhập tối đa {0} kí tự";
export const MESS_ERR_MIN_LENGTH = "Phải nhập tối thiểu {0} kí tự";
export const MESS_ERR_MIN_VALUE = "Phải nhập số lớn hơn {0}";
//#endregion
