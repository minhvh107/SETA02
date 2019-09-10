import { connect } from 'react-redux';
import { Workspace } from '@components';

const mapStateToProps = (state) => {
    return {
        opened: state.DashboardReducer.opened,
        direction: state.DashboardReducer.direction,
    }
}

export default connect(mapStateToProps)(Workspace);