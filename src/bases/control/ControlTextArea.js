import React from 'react';
import TextField from '@material-ui/core/TextField'
//#region   Custom
/**
 *  margin: 'none' | 'dense' | 'normal'
 *  variant:  'standard' | 'outlined' | 'filled'
 *  required: true | false
 *  multiline: true | false
 *  disabled: true | false
 */

//#endregion
const ControlTextArea = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => <TextField
        {...input}
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        fullWidth
        margin="none"
        autoComplete=""
        placeholder=""
        multiline
        rows="4"
        {...custom}
    />;

export default ControlTextArea;