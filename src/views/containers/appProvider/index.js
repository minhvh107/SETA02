import { connect } from '@node_modules/react-redux';
import { AppProvider } from '@components';

const mapStateToProps = (state) => {
    return {
        type: state.DashboardReducer.type,
        direction: state.DashboardReducer.direction
    }
}

export default connect(mapStateToProps, null)(AppProvider);