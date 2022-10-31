import React from "react";
import Listofrecords from "./Listofrecords";
import TableData from "./TableData";
import { useState } from "react";

const Search = () => {

    const[query,setQuery] = useState("");


    const keys=["name", "startdate", "enddate"];
  
  
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
      );

    } 
  return (
    <div>
      <div className="input-group mb-3">
  <div className="input-group-prepend"></div>
  <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"
   onChange={(e) => setQuery(e.target.value)}
   />
</div>
<TableData data={search(Listofrecords)} />
    </div>
  );
}

export default Search;