import React, { useEffect, useState } from 'react';
import { Wrapper } from '@components';

import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '@styles/TableStyles';

import { PostCreateOrUpdate } from '@containers';
import * as TextConstants from '@constants/TextConstants';
import { EnhancedTableToolbar } from '@utils';
import { LocalizationConstants } from '@constants/LocalizationConstants';
import { REPLACE_POST } from '@constants/RouteConstants';


const PostList = props => {
    const { rowSelected, actCreateRow, actUpdateRow, actDeleteRow, rows } = props;
    useEffect(() => {
        props.actReadRow();
    }, []);

    const [headColumns, setHeadColumns] = useState([
        { field: 'id', title: TextConstants.TEXT_ID, viewColumn: true },
        { field: 'title', title: TextConstants.REPLACE_NAME(REPLACE_POST), viewColumn: true },
        { field: 'body', title: TextConstants.TEXT_CONTENT, viewColumn: true },
    ]);
    const handleViewColumn = (e) => {
        let value = e.target.checked;
        let name = e.target.name;
        let findIndex = headColumns.findIndex(m => m.field == name);
        headColumns[findIndex].viewColumn = value
        setHeadColumns([...headColumns]);
    }

    return (
        <Wrapper>
            <Paper>
                <MaterialTable
                    data={rows}
                    columns={headColumns.filter(x => x.viewColumn)}
                    localization={LocalizationConstants}
                    options={{
                        selection: true,
                        sorting: true,
                        filtering: true,
                        defaultExpanded: true,
                        pageSize: 10,
                        pageSizeOptions: [10, 20, 50, 100]
                    }}
                    onSelectionChange={(data) => {
                        let rowDiff = [];
                        data.forEach(row => {
                            if (!rowDiff.includes(row.id))
                                rowDiff.push(row.id);
                        });
                        props.actCheckRow(rowDiff);
                    }}
                    onRowClick={(event, rowData) => {
                        props.actViewRow(rowData.id);
                    }}
                    components={{
                        Toolbar: props => {
                            return (<EnhancedTableToolbar
                                rowSelected={rowSelected}
                                handleAdd={actCreateRow}
                                handleEdit={actUpdateRow}
                                handleDelete={actDeleteRow}
                                ToolbarTitle={TextConstants.REPLACE_TITLE_READ(REPLACE_POST)}
                                headColumns={headColumns}
                                handleViewColumn={handleViewColumn} />)
                        }
                    }}
                />
            </Paper>

            <PostCreateOrUpdate />

        </Wrapper>
    )
}

export default withStyles(styles)(PostList);
