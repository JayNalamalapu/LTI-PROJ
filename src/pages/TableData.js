import React from "react";
import {Table} from 'react-bootstrap';

const TableData = ({data}) => {
  return (
    <div>
        <Table striped bordered hover size="sm">
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
    </div>
  );
}

export default TableData;