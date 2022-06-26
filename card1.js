import React from "react";
import moment from "moment";
import { AddExpDelete } from "../redux/action/action";
import { useDispatch } from "react-redux";
import "./card.css";
const Card1 = ({ item,notify }) => {
  console.log("showdata", { item });
  const time = moment(item.id).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () => {
    
    dispatch(AddExpDelete({ item }));
    notify()
  };
  return (
    <div className="card">
      <div className="cardinfo">
        <label className="cardtitle">{item.desc}</label>
        <label className="cardtime">{time}</label>
      </div>
      <div className="cardright">
        <div>
          {" "}
          <label className="cardamount">{item.amount}</label>
        </div>
        <div>
          <label>
            <button className="deleteicon" onClick={(e) => handleDelete(e)}>
              delete
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card1;
