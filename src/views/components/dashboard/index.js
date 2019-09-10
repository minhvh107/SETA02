import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Header, Workspace } from '@containers';

import DashboardStyles from '@styles/DashboardStyles';
import { MobileBreakpoint } from '@styles/variables';
import { Post } from '@containers';

const Dashboard = props => {
    let mediaMatcher = matchMedia(`(max-width: ${MobileBreakpoint}px)`);
    useEffect(() => {
        if (mediaMatcher.matches) props.onChangeOpened(false);
        mediaMatcher.addListener(match => {
            setTimeout(() => {
                props.onChangeOpened(match.matches);
            }, 300)
        })

        let unlisten = props.history.listen(() => {
            if (mediaMatcher.matches) props.onChangeOpened(false);
            document.querySelector('#root > div > main').scrollTop = 0;
        });
        return () => {
            unlisten();
            mediaMatcher.removeListener(match => {
                setTimeout(() => {
                    props.onChangeOpened(match.matches);
                }, 300)
            });
        }
    }, [])

    const { classes } = props;
   
    return (
        <Fragment>
            <div className={classNames(classes.panel, 'theme-dark')}>
                <Workspace>
                    <Post />
                </Workspace>
            </div>
        </Fragment>

    );
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(DashboardStyles)(Dashboard);