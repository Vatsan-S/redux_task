import React from "react";
import { useSelector } from 'react-redux';

const Footer = () => {
 
  const totalPrice = useSelector((state)=>state.countReducer.finalPrice)
  const totalCount = useSelector((state)=>state.countReducer.totalCount)

  return (
    <div className="footer">
      <div className="footerContainer">
        <p className="footerPara">Total Qty: {totalCount}</p>
        <p className="footerPara">Total Price: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Footer;
