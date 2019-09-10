import { Post } from '@components';
import { connect } from 'react-redux';
import { PostOperations } from '@duck/contents/post';
const mapStateToProps = (state, props) => {
    return {
        rows: state.ContentsReducer.PostReducer.rows,
        rowSelected: state.ContentsReducer.PostReducer.rowSelected
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actReadRow: () => {
            return dispatch(PostOperations.actReadRow(props));
        },
        actCheckRow: (value) => {
            return dispatch(PostOperations.actCheckRow(props, value));
        },
        actCreateRow: () => {
            return dispatch(PostOperations.actCreateRow(props));
        },
        actUpdateRow: (id) => {
            return dispatch(PostOperations.actUpdateRow(props, id));
        },
        actDeleteRow: (ids) => {
            return dispatch(PostOperations.actDeleteRow(props, ids));
        },
        actViewRow: (id) => {
            return dispatch(PostOperations.actViewRow(props, id));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);