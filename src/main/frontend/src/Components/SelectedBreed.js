import { connect, useDispatch } from 'react-redux';
import { selectedBreed } from '../Actions/BreedActions';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

function SelectedBreed(){

    const [Resident, setResident] = useState(null);
    const Breed = useSelector(state => state.Breed);
    const params = useParams();
    console.log("Params ID: ", params.id);
    console.log("Params Breed: ", params.breed);

    const ID = params.id;
    const breed = params.breed.toLowerCase();
    const breedPic = breed+"1_1.jpg";
    const BREED_LIST_URL = "http://localhost:8080/breeded_shelter/breed/" +ID;

    const dispatch = useDispatch();

      useEffect(() => {
        if(ID && ID !== ""){getBreed()};

        async function getBreed() {
          const response = await fetch(BREED_LIST_URL);
          const data = await response.json();
          setResident(data);
          dispatch(selectedBreed(data));
          console.log(data) ;
        }
      }, []);

      console.log("Available Data: ", Breed.Type[8].residentsName);

return (
    <>
    <div id="mainBackGround">
    <div className = "container">
    <center><img id="mainImage2" src={`${process.env.PUBLIC_URL}/Logos/text-1639206732282.png`} alt="Welcome to Breed Shelter" /></center>
    </div>
    <nav class="crumbsArea">
        <center>
            <ol>
                <li className="crumb"><a href="/breeded-shelter/facility" id="navBar">Breeded Shelter</a></li>
                <li className="crumb"><a href="/breeded-shelter/staff" id="navBar2">Meet Our Staff</a></li>
                <li className="crumb"><a href="/breeded-shelter/residents" id="navBar3">Our Residents</a></li>
            </ol>
        </center>
    </nav>
    <div>
    <hr/>
    </div>
    <center>
    <div className="welcomePage">

    </div>
    </center>
    </div>
    <div>
    <center><span>{breed}</span></center>
        <center><img id="puppyPics" src={`${process.env.PUBLIC_URL}/Dogs/${breedPic}`} alt="Resident Pic" /></center>
    </div>
    <div id="mainBottom">

        <div>
        <hr/>
        <center><button id="button1" type="button" disabled ><b>Ｗ ｅ ｌ ｃ ｏ ｍ ｅ</b></button></center>
        </div>
    </div>
    </>
    )
}
const mapStateToProps = (state) => {
  return {
    Breed: state.Breed
  }

}


export default connect(mapStateToProps, null)(SelectedBreed);