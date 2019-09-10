import Dashboard from '@components/dashboard';
import { connect } from 'react-redux';
import { dashboardOperations } from '@duck/dashboard';

const mapStateToProps = (state) => {
    return {
        opened: state.DashboardReducer.opened,
        openSpeedDial: state.DashboardReducer.openSpeedDial,
        direction: state.DashboardReducer.direction,
    }
}

const mapDispatchToProps = (dishpatch, props) => {
    return {
        onChangeOpened: (opened) => {
            dishpatch(dashboardOperations.actChangeOpened(props, opened));
        },
        onToggleTheme: () => {
            dishpatch(dashboardOperations.actToggleTheme(props));
        },
        onToggleDirection: () => {
            dishpatch(dashboardOperations.actToggleDirection(props));
        },
        onToggleSpeedDial: (openSpeedDial) => {
            dishpatch(dashboardOperations.actToggleSpeedDial(props, openSpeedDial));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);