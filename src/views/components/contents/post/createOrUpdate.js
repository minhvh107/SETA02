import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DialogOptionalSizes from '@basesControl/DialogOptionalSizes';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { ControlTextField, ControlTextArea } from '@basesControl';
import { REPLACE_POST } from '@constants/RouteConstants';
import * as TextConstants from '@constants/TextConstants';
import * as validateForm from '@basesShared/validateForm';
const styles = theme => ({
});

const CreateOrUpdate = props => {
    const { classes, showModal, handleSubmit, submitting, invalid, pristine, actClose, rowEditing, isView, lstImage } = props;

    useEffect(() => {
        props.initialize(rowEditing);
    }, [rowEditing]);

    function onHandleSubmit(values) {
        return props.actSave(values).then(res => {
            if (res != undefined) {
                throw new SubmissionError(res);
            }
        });
    }

    function onHandleEdit() {
        return props.actUpdateRow(rowEditing.id);
    }

    function onHandleDelete() {
        return props.actDeleteRow([rowEditing.id]);
    }

    let titleDialog = TextConstants.REPLACE_TITLE_DIALOG(REPLACE_POST, isView, rowEditing);

    return (
        <DialogOptionalSizes
            title={titleDialog}
            txtSave={TextConstants.TEXT_SAVE_CREATE}
            showBtnSave={!isView}
            showModal={showModal}
            closeModal={actClose}
            submitting={invalid || submitting || pristine}
            classes={classes}
            size="md"
            fullWidth={true}
            handleSubmit={handleSubmit((values) => onHandleSubmit(values))}
            handleEdit={onHandleEdit}
            handleDelete={onHandleDelete}
            isView={isView} >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Field name="title"
                        component={ControlTextField}
                        validate={[validateForm.required, validateForm.minLength2, validateForm.maxLength255]}
                        label={TextConstants.REPLACE_NAME(REPLACE_POST)}
                        disabled={isView}
                        required={true} />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Field name="body"
                        component={ControlTextArea}
                        validate={[validateForm.required, validateForm.maxLength255]}
                        label={TextConstants.TEXT_CONTENT}
                        disabled={isView}
                        required={true} />
                </Grid>
            </Grid>
        </DialogOptionalSizes>
    );
}
export default reduxForm({
    form: 'CreateOrUpdatePost'
})(withStyles(styles)(CreateOrUpdate));
