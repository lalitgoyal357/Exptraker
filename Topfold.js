import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddSearch } from "../redux/action/action";
import AddExp from "./AddExp";
import "./topfold.css";

const Topfold = () => {
  const dispatch=useDispatch()
  const [search, setSearch] = useState("");
  const [hide, setHide] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(AddSearch( e.target.value))
    console.log("search",search)
   

  };

  const handleChange = (e) => {
    setHide(true);
  };

  const handleHide=(()=>{
    setHide(false)
  })

  return (
    <>
      <div className="topfold">
        <div className="searchbar">
          <input placeholder="search" value={search} onChange={(e)=>handleSearch(e)} />
        </div>
        <div className="add-button">
          <button onClick={handleChange}>Add</button>
          <button onClick={handleHide}>CANCEL</button>
        </div>
      </div>

      {hide ? (
        <div>
          <AddExp data={hide} onClick={handleHide} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Topfold;
