import React from 'react';
import TableBody from './TableBody';

const Table = (props) => {
    const [sortConfig, setSortConfig] = React.useState(null);
    const {libraryData} = props;

    var sortedData = [...libraryData];

    if (sortConfig != null) {
        sortedData.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
    }


    return(
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th><button type="button" onClick={() => requestSort('title')}>Title</button></th>
                        <th><button type="button" onClick={() => requestSort('author')}>Author</button></th>
                    </tr>
                </thead>
                <TableBody libraryData = {sortedData}/>
            </table>
        </React.Fragment>
    )
}

export default Table;