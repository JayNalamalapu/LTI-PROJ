import React, {useRef} from "react";
import {Table} from 'react-bootstrap';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const TableData = ({data}) => {

  return (
    <div>
        <Table striped bordered hover size="sm" id="tab_data">
            <tbody>
            <tr>
                <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
            </tr>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.startdate}</td>
                    <td>{item.enddate}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        <ReactHTMLTableToExcel 
        className="btn btn-info"
        table="tab_data"
        filename="table_data file"
        sheet="Sheet"
        buttonText="Export to Excel"
        disabled={true}
        />
    </div>
  );
}

export default TableData;