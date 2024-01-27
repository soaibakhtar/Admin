import React, { useEffect } from "react";
// import "./home.css";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

import Navbar from "./Navbar.js";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action.js";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";


function Dashboard() {

    const dispatch = useDispatch();
    const data = useSelector((store) => store) || [];
    console.log(data);

    useEffect( () => {
        dispatch(getData())
    },[])


  return (
    <>
      <div className="grid-container">
        <Navbar />
        <main className="main-container">
          <div className="main-title">
            <h3>DASHBOARD</h3>
          </div>

          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill className="card_icon" />
              </div>
              <h1>0</h1>
            </div>
            <div className="card">
              <div className="card-inner">
                <h3>CATEGORIES</h3>
                <BsFillGrid3X3GapFill className="card_icon" />
              </div>
              <h1>1</h1>
            </div>
            <div className="card">
              <div className="card-inner">
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className="card_icon" />
              </div>
              <h1>3</h1>
            </div>
            <div className="card" >
              <div className="card-inner">
                <h3>ALERTS</h3>
                <BsFillBellFill className="card_icon" />
              </div>
              <h1></h1>
            </div>
          </div>

        <div className="data">
            {data?.data?.map( (data) => {
                return (
                    <div className="data-card" style={{color:'black'}}>
                        <div className="image">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="title">
                            <h3>{data.name}</h3>
                            <p>{data.text}</p>
                        </div>
                        <div className="button">
                            <button>Delete</button>
                            <button>Update</button>
                        </div>
                    </div>
                )
            })}
        </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;