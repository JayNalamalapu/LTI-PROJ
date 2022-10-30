import React,{useState} from "react";
import {Button, Form} from 'react-bootstrap';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';
import Listofrecords from "./Listofrecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function Create(){
    const[name,setName] = useState('');
    const[startdate,setStartdate] = useState('');
    const[enddate,setEnddate] = useState('');

    let history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);
         let a = name, 
         b = startdate,
         c = enddate;

         Listofrecords.push({id: uniqueId, name : a, startdate : b, enddate : c});

         history('/home');
    }

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:'15rem'}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStartedate">
                    <Form.Control type="text" placeholder="Enter Start Date" required onChange={(e) => setStartdate(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEnddate">
                    <Form.Control type="text" placeholder="Enter End Date" required onChange={(e) => setEnddate(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Create;