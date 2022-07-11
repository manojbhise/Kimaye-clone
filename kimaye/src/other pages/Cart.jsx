import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Cart() {
  const navigate = useNavigate();

  var swati = JSON.parse(localStorage.getItem("cartitms"));
  var [popitems, setPopitems] = useState(swati);

  console.log(popitems);

  const remove = (item) => {
    console.log(item);

    localStorage.setItem(
      "cartitms",
      JSON.stringify(popitems?.filter((x) => x.id !== item.id))
    );
    setPopitems(JSON.parse(localStorage.getItem("cartitms")));
  };

  return (
    <div>
      <Navbar />
      <h1>CART</h1>
      <div
        className="ss"
        style={{
          display: "grid",
          gridTemplateColumns: "Repeat(2,1fr)",
          gap: "30px",
          marginLeft: "200px",
        }}
      >
        {swati.map((item) => (
          <div className="card">
            <div className="card-image">
              <img className="imgdata" src={item.imgURL} alt={item.name} />
            </div>
            <p>{item.title}</p>
            <div className="price">
              <h3>{item.sellingPrice}</h3>
              <h4>{item.mrp}</h4>
            </div>
            <a
              href="#"
              onClick={() => remove(item)}
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                textDecoration: "none",
              }}
            >
              REMOVE
            </a>

            {/* <button onClick={()=>handledelte(id)}>Remove</button> */}
          </div>
        ))}
        ;
      </div>

      <button
        style={{
          marginTop: "20px",
          border: "3px solid orangered",
          borderRadius: "50px",
          width: "300px",
          height: "50px",
          fontWeight: "bolder",
          textAlign: "center",
          backgroundColor: "rgba(255, 68, 0, 0.514)",
        }}
        onClick={() => navigate("/address")}
      >
        PROCEED TO ADDRESS
      </button>
    </div>
  );
}

export default Cart;
