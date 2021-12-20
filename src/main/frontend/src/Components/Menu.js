import React, { useState, useEffect } from 'react';
//import React from 'react';
//import { connect, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { setBreeds } from '../Actions/BreedActions';
import { useSelector } from 'react-redux';

function Menu(){

const Residents = useSelector((state) => state.Residents);
console.log(Residents);
return (
        <>
        <nav class="crumbs">
        <center>
            <ol>
                <li class="crumb"><a href="/breeded-shelter/residents" id="navBar">Breeded Shelter</a></li>
                <li class="crumb"><a href="/breeded-shelter/residents" id="navBar2">Meet Our Staff</a></li>
                <li class="crumb"><a href="/breeded-shelter/residents" id="navBar3">Our Residents</a></li>
            </ol>
            </center>
        </nav>
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