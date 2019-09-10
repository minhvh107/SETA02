import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    // root: {
    //     width: '100%',
    //     marginTop: theme.spacing(3),
    //     overflowX: 'auto',
    // },
    // table: {
    //     minWidth: 700,
    // },
    // row: {
    //     '&:nth-of-type(odd)': {
    //         backgroundColor: theme.palette.background.default,
    //     },
    // },
    // root: {
    //     width: '100%',
    //     marginTop: theme.spacing(3),
    //   },
    //   table: {
    //     minWidth: 500,
    //   },
    //   tableWrapper: {
    //     overflowX: 'auto',
    //   },
    marginTop: {
        marginTop: `${theme.spacing(3)}px`,
    },
    rootCard: {
        overflow: 'visible'
    }
});

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    }
}))(TableCell);

export {
    styles,
    CustomTableCell
}