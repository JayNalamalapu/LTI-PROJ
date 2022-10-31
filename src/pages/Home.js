import React, { Fragment, useState} from "react";
import {Button, Table} from 'react-bootstrap';
import Listofrecords from "./Listofrecords";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom';
import TableData from "./TableData";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



const Home = () => {




  let history = useNavigate();

  const handleEdit = (id, name, startdate, enddate) => {
    localStorage.setItem('name',name);
    localStorage.setItem('id',id);
    localStorage.setItem('startdate',startdate);
    localStorage.setItem('enddate',enddate);
  }


  const handleDelete = (id) => {
    var index = Listofrecords.map(function(e){
      return e.id
    }).indexOf(id);
    Listofrecords.splice(index,1);

    history('/home');
  }

      return (
        <Fragment>




          <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                   Listofrecords.length > 0
                  ?
                  Listofrecords.map((item) => {
                    return(
                      <tr key={item.id}>
                        <td>
                          {item.name}
                        </td>
                        <td>
                          {item.startdate}
                        </td>
                        <td>
                          {item.enddate}
                        </td>
                        <td>
                          <Link to={'/edit'}>
                          <Button size="sm" onClick={() => handleEdit(item.id, item.name, item.startdate, item.enddate)}>EDIT</Button>
                          </Link>&nbsp;
                          <Button size="sm" onClick={() => handleDelete(item.id)}>DELETE</Button>
                        </td>
                      </tr>
                    )
                  })
                  :
                  "NO Data Available"
                }
              </tbody>
            </Table>
             <br></br>
            <Link to={'/create'}><Button size="lg" className="btn btn-info">Add Report</Button></Link><br></br><br></br>
            <ReactHTMLTableToExcel 
                        className="btn btn-info"
                        table="tab_data"
                        filename="table_data file"
                        sheet="Sheet"
                        buttonText="Export to Excel"
                        />
          </div>
        </Fragment>
      );
    }
    
    export default Home;