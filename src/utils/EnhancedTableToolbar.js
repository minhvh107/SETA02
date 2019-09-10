import React from 'react';
import classNames from 'classnames';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import AddIcon from '@material-ui/icons/Add';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';

import yellow from '@material-ui/core/colors/yellow';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import Hidden from '@material-ui/core/Hidden';

import * as TextConstants from '@constants/TextConstants';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ViewColumn from '@material-ui/icons/ViewColumn';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import * as ConfigConstants from '@constants/ConfigConstants';

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing(1),
        borderBottom: '1px solid #ddd'
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
        flex: '0 0 auto',
    },
    title: {
        flex: '0 0 auto',
    },
    button: {
        margin: theme.spacing(1),
    },
    buttonPrimary: {
        color: "#fff",
        backgroundColor: indigo[500],
        '&:hover': {
            backgroundColor: indigo[800],
        },
    },
    buttonWarning: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        '&:hover': {
            backgroundColor: yellow[700],
        },
    },
    buttonInfo: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
    },
});

let EnhancedTableToolbar = props => {
    const { classes, rowSelected, ToolbarTitle, headColumns, handleViewColumn, functionCode } = props;
    const numSelected = rowSelected ? rowSelected.length : 0;
    const ITEM_HEIGHT = 48;
   
    //#region ViewColumn Anchor
    const [anchorElColumn, setAnchorElColumn] = React.useState(null);

    function handleClickColumn(event) {
        setAnchorElColumn(event.currentTarget);
    }

    function handleCloseColumn() {
        setAnchorElColumn(null);
    }
    //#endregion

    let renderAction = (props, classes, numSelected) => {
        var result = [];
        result.push(
            <Button key="create"
                variant="contained"
                className={classNames(classes.button, classes.buttonPrimary)}
                onClick={props.handleAdd}>
                <AddIcon />
                {TextConstants.TEXT_CREATE}
            </Button>
        );

        if (numSelected == 1) {

            result.push(
                <Button key="update"
                    variant="contained"
                    className={classNames(classes.button, classes.buttonWarning)}
                    onClick={() => props.handleEdit(props.rowSelected)}>
                    <EditIcon />
                    {TextConstants.TEXT_UPDATE}
                </Button>
            );

        }

        if (numSelected >= 1) {
            result.push(
                <Button key="delete"
                    variant="contained"
                    className={classes.button}
                    color="secondary"
                    onClick={() => props.handleDelete(props.rowSelected)}>
                    <DeleteIcon />
                    {TextConstants.TEXT_DELETE}
                </Button>
            );
        }

        return result;
    }
    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0,
            })} >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="h6">Đã chọn {numSelected} dòng</Typography>
                ) : (
                        <Typography color="inherit" variant="h6">{ToolbarTitle}</Typography>
                    )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {renderAction(props, classes, numSelected)}

                {headColumns && headColumns.length &&
                    <Hidden xsDown>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleClickColumn}
                        >
                            <ViewColumn />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorElColumn}
                            keepMounted
                            open={Boolean(anchorElColumn)}
                            onClose={handleCloseColumn}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: 200,
                                },
                            }}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}>
                            {headColumns.map((column, index) => (
                                <MenuItem key={index}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={column.viewColumn}
                                                name={column.field}
                                                onChange={handleViewColumn}
                                                color="primary"
                                            />
                                        }
                                        label={column.title} />
                                </MenuItem>
                            ))}
                        </Menu>
                    </Hidden>
                }
            </div>
        </Toolbar>
    );
};

export default withStyles(toolbarStyles)(EnhancedTableToolbar);