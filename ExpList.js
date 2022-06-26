import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import Card1 from "./card";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ExpList = () => {

  const {expList:state}=useSelector((state)=>state.expenses)
  const {incomeList:state1}=useSelector((state)=>state.expenses)
  const {query}=useSelector((state)=>state.expenses)
   const filterlist=state.filter((e)=>e.desc.includes(query));
   const filterlist1=state1.filter((e)=>e.desc.includes(query));
  console.log("state===",state)
     const notify = () => toast("  ITEM DELETED !");

  return (

    <div>
      <ToastContainer
      position="top-center"
      autoClose={1000}/>
      {filterlist.length ? filterlist.map((item) => <Card item={item} notify={notify}/>) : null }
    {filterlist1.length ? filterlist1.map((item) => <Card1 item={item} notify={notify}/>) : null }</div>
  );
};

export default ExpList;
