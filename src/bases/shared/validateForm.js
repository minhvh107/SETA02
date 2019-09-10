import * as TextConstants from '@constants/TextConstants';

//#region   Validate Bắt buộc nhập
export const required = value => (value ? undefined : TextConstants.MESS_ERR_REQUIRED);
//#endregion

//#region   Validate max kí tự
export const maxLength = max => value =>
    value && value.length > max ? `${TextConstants.MESS_ERR_MAX_LENGTH.replace('{0}', max)}` : undefined;

// Max 15 kí tự
export const maxLength15 = maxLength(15);
export const maxLength255 = maxLength(255);
//#endregion 

//#region   Validate Min kí tự
export const minLength = min => value =>
    value && value.length < min ? `${TextConstants.MESS_ERR_MIN_LENGTH.replace('{0}', min)}` : undefined;
//Min 2 kí tự
export const minLength2 = minLength(2);
//#endregion

//#region   Validate chỉ nhập kí tự số
export const number = value =>
    value && isNaN(Number(value)) ? TextConstants.MESS_ERR_NUMBER : undefined;
//#endregion

//#region   Validate giá trị nhỏ nhất
export const minValue = min => value =>
    value && value < min ? `${TextConstants.MESS_ERR_MIN_VALUE.replace('{0}', min)}` : undefined

// Nhỏ nhất 0
export const minValue0 = minValue(0);

// Nhỏ nhất 18
export const minValue18 = minValue(18);

//#endregion

//#region   Validate chỉ nhập số và chữ
export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9/./-]/i.test(value)
        ? TextConstants.MESS_ERR_ALPHANUMBER
        : undefined;
//#endregion
