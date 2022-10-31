import React from "react";

const TableData = ({data}) => {
  return (
    <div>
        <table>
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
        </table>
    </div>
  );
}

export default TableData;