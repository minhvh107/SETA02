import { PostCreateOrUpdate } from '@components';
import { connect } from 'react-redux';
import { PostOperations } from '@duck/contents/post';

const mapStateToProps = (state) => {
    return {
        showModal: state.ContentsReducer.PostReducer.showModalCreateOrUpdate,
        rowEditing: state.ContentsReducer.PostReducer.rowEditing,
        isView: state.ContentsReducer.PostReducer.isView,
        lstImage: state.ContentsReducer.PostReducer.lstImage,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actUpdateRow: (id) => {
            return dispatch(PostOperations.actUpdateRow(props, id));
        },
        actDeleteRow: (ids) => {
            return dispatch(PostOperations.actDeleteRow(props, ids));
        },
        actClose: () => {
            return dispatch(PostOperations.actCloseCreateOrUpdate(props));
        },
        actSave: (value) => {
            return dispatch(PostOperations.actSaveCreateOrUpdate(props, value));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostCreateOrUpdate);

