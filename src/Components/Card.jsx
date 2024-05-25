import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateTotalPrice, updateTotalProducts } from "../Utilities/CountSlice";

const Card = ({ ele, index }) => {
  const [btnName, setBtnName] = useState(true);
  const [disp, setDisp] = useState(false);
  const [count, setCount] = useState(0);
  const [price, setPrice]= useState(0);
  // const a = useSelector((state)=>state.countReducer.totalPrice)
  // const b = useSelector((state)=>state.countReducer.totalCount)
  // const c = useSelector((state)=>state.countReducer.totalProducts)
  // console.log(a,b,c)
  // console.log(key, index)
  const dispatch = useDispatch()

  const handleChange = (value)=>{
    setCount(value)
  }

  const handleClick = ()=>{
    setBtnName(!btnName);
    setDisp(!disp);

    btnName ? setCount(1) : setCount(0);
    btnName? setPrice(ele.price) : setPrice(0)
  }

useEffect(()=>{
   
    const actionValue = [index,count]
    dispatch(updateTotalProducts({
        index: index,
        count:count
    }))
    dispatch(updateTotalPrice({
        index:index,
        price:count*price
    }))
},[count])
  return (
    
      <div className="card">
        <div className="cardImage">
          <img src={ele.thumbnail} alt="" />
        </div>
        <div className="content">
          <div className="top-content">
            <h4>{ele.title}</h4>
            <p>{ele.description}</p>
          </div>
          <div className="bottom-content">
            <p className="price">${ele.price}</p>
            <div className="quantity">
              <div className={disp ? "counter" : "counter none"}>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  // defaultValue={1}
                  value={count}
                  min="1"
                  max={ele.stock}
                  onChange={(e) => {
                    handleChange(e.target.value);
                  }}
                />
              </div>
              <button
                className="addToCart btn btn-success"
                onClick={handleClick}
              >
                {btnName ? "Add to Cart" : "Remove"}
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Card;
