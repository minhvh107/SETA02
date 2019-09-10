import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import WorkspaceStyles from '@styles/WorkspaceStyles';

const Workspace = (props) => {
    const { classes, children, opened, direction } = props;
    const workspaceLeft = classNames(classes.content, classes[`content-left`],
        {
            [classes.contentShift]: opened,
            [classes[`contentShift-left`]]: opened,
        });
    const workspaceRight = classNames(classes.content, classes[`content-right`],
        {
            [classes.contentShift]: opened,
            [classes[`contentShift-right`]]: opened,
        });
    return (
        <main className={direction === 'ltr' ? workspaceLeft : workspaceRight} >
            {children}
        </main>
    );
}

Workspace.proptypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    opened: PropTypes.bool
};

export default withStyles(WorkspaceStyles)(Workspace);