import React, { useEffect } from 'react';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import * as TextConstants from '@constants/TextConstants';

import { yellow } from '@material-ui/core/colors';
import grey from '@material-ui/core/colors/lightGreen';

import classNames from 'classnames';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    buttonInfo: {
        color: theme.palette.common.white,
        backgroundColor: grey[500],
        '&:hover': {
            backgroundColor: grey[700],
        },
    },
    button: {},
    buttonWarning: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        '&:hover': {
            backgroundColor: yellow[700],
        },
    },
});

const Transition = React.forwardRef((props, ref) => {
    return <Slide direction="down" {...props} ref={ref} />;
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const DialogOptionalSizes = React.forwardRef((props, ref) => {
    const { classes, closeModal, title, txtSave, submitting, showModal, size, fullWidth, children, handleSubmit, showBtnSave, isView } = props;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Dialog
            ref={ref}
            disableBackdropClick
            disableEscapeKeyDown
            disableEnforceFocus={true}
            fullScreen={fullScreen}
            maxWidth={size}
            fullWidth={fullWidth}
            open={showModal}
            onClose={closeModal}
            TransitionComponent={Transition}
            scroll='paper'>
            <DialogTitle onClose={closeModal}>{title}</DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
            <DialogActions>
                {showBtnSave && <Button onClick={handleSubmit} disabled={submitting} variant="contained" className={classNames(classes.buttonInfo)}><SaveIcon /> {txtSave}</Button>}
                {typeof props.handleEdit === "function" &&
                    isView &&
                    < Button variant="contained" className={classNames(classes.button, classes.buttonWarning)}
                        onClick={props.handleEdit}>
                        <EditIcon />
                        {TextConstants.TEXT_UPDATE}
                    </Button>
                }

                {typeof props.handleDelete === "function" &&
                    isView &&
                    < Button variant="contained" color="secondary"
                        onClick={props.handleDelete}>
                        <DeleteIcon />
                        {TextConstants.TEXT_DELETE}
                    </Button>
                }
                <Button onClick={closeModal} variant="contained"><CloseIcon /> {TextConstants.TEXT_CLOSE_DIALOG}</Button>
            </DialogActions>
        </Dialog>
    );
});

export default withStyles(styles)(DialogOptionalSizes);