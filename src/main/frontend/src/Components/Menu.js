//import React, { useState, useEffect } from 'react';
import React from 'react';
//import { connect, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
//import { setStadiumList } from '../Actions/StadiumActions';
import { useSelector } from 'react-redux';



function Menu(){

const Residents = useSelector((state) => state.Residents);
console.log(Residents);
return (
        <>
        <center><h1>Main Menu</h1></center>
            <div>
            <hr/>
                <center><h5>Please,</h5></center>
                <center><a href={"/breeded-shelter/residents"}><button>Meet the Residents</button></a></center>
            </div>

        </>
    )
}
export default connect(null, null)(Menu);