import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import "./addexp.css";
import { useDispatch } from "react-redux";
import { AddExpSucc,AddIncSucc } from "../redux/action/action";
import { ToastContainer,toast } from "react-toastify";

const AddExp = ({ onClick, data }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXP");

  if (!data) {
    return null;
  }

  const showData = () => {
    if (!amount || !desc) {
      const notify = () => toast("Please fill the data !");
      notify()
      return
    } else {
      const data = {
        amount,
        desc,
        id:Date.now(),
        type
      };
      if(type==="EXP"){
        dispatch(AddExpSucc(data));
      }else{
        dispatch(AddIncSucc(data));
      }
      
      onClick()
    }
  };

  const handleAmount = (e) => {
    const val = parseInt(e.target.value);
    setAmount(val);
  };

  return (
    <div className="addexp">
      <ToastContainer
      position="top-center"
      autoClose={2000}/>

      <span>AddExp</span>
      <div className="desc">
        <input
          className="input"
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label className="label">Description</label>
      </div>
      <div className="desc">
        <input type="Number" value={amount} onChange={(e) => handleAmount(e)} />
        <label className="label">Amount</label>
      </div>
      <div className="okbutton">
        <button onClick={showData}>OK</button>
       
      </div>
      <div>
      <input
          type="radio"
          id="expense"
          name="type"
          value="EXP"
          checked={type === "EXP"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
 
      </div>
    </div>
  );
};

export default AddExp;
