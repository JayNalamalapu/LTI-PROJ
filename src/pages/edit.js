import React,{useState, useEffect } from "react";
import {Button, Form} from 'react-bootstrap';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';
import Listofrecords from "./Listofrecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function Edit(){

    const[name,setName] = useState('');
    const[startdate,setStartdate] = useState('');
    const[enddate,setEnddate] = useState('');
    const[id,setId] = useState('');

    let history = useNavigate();

    var index = Listofrecords.map(function(e){
        return e.id
      }).indexOf(id);

      const handleSubmit = (e) => {
        e.preventDefault();

        let a = Listofrecords[index];
        a.name = name;
        a.startdate = startdate;
        a.enddate = enddate;

         history('/home');
    }

    useEffect(() => {
        setName(localStorage.getItem('name'))
        setStartdate(localStorage.getItem('startdate'))
        setEnddate(localStorage.getItem('enddate'))
        setId(localStorage.getItem('id'))
    },[])

      return(
        <div>
            <Form className="d-grid gap-2" style={{margin:'15rem'}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStartedate">
                    <Form.Control type="text" placeholder="Enter Start Date" value={startdate} required onChange={(e) => setStartdate(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEnddate">
                    <Form.Control type="text" placeholder="Enter End Date" value={enddate} required onChange={(e) => setEnddate(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
      )

}

export default Edit;