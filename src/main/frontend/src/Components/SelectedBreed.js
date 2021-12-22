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
        }
      }, []);


if((Breed) && Object.keys(Breed).length > 0){
      const selectedPup = Breed.Type[params.id];
      const { id, breedName, group, gender, age, image1, image2, assignedStaff, residentsName } = selectedPup;
       var ResidentDetails = (
          <>
          <center><span>Meet {selectedPup.residentsName}.</span></center>
          <div class='parent'>
            <div class='child'><img src={`${process.env.PUBLIC_URL}/Dogs/${selectedPup.image1}`} alt="Image1" /></div>
            <div class='child'><img src={`${process.env.PUBLIC_URL}/Dogs/${selectedPup.image2}`} alt="Image2" /></div>
          </div>
          <div class="container">
              <div class="content">
              <div>Speak to {selectedPup.assignedStaff} to speak to {selectedPup.residentsName}</div>
              </div>
          </div>
          </>
        )
}

const ScrollButton = () =>{

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button id="scrollButton" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>Top</button>
  );
}


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
    <center><span id="profileBreed"><b>{breed}</b></span></center>
    <center>
           {ResidentDetails}
    </center>
    </div>
    <div>
    </div>
    <div id="mainBottom">

        <div>
        <hr/>
        <ScrollButton/>
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