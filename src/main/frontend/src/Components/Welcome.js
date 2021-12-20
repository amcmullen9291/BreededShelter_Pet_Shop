import { connect, useDispatch } from 'react-redux';
import { setBreeds } from '../Actions/BreedActions';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

function Welcome(){

    const Residents = useSelector((state) => state.Residents);

     const dispatch = useDispatch();

     const BREED_LIST_URL = "http://localhost:8080/breeded_shelter/residents";

     const fetchBreeds = async () => {

        const APIresponse = await axios.get(BREED_LIST_URL)
        .then(response => {dispatch(setBreeds(response))})
        .then(console.log(Residents.Residents.data[3]))
        .catch((error) => {
          console.log("Error:", error);
        });

      };

      useEffect(() => {
        fetchBreeds();
      }, [])

return (
    <>
    <div id="mainBackGround">
    <div className = "container">
    <center><img id="mainImage2" src={`${process.env.PUBLIC_URL}/Logos/text-1639206732282.png`} alt="Welcome to Breed Shelter" /></center>
    </div>
    <nav class="crumbsArea">
        <center>
            <ol>
                <li class="crumb"><a href="/breeded-shelter/facility" id="navBar">Breeded Shelter</a></li>
                <li class="crumb"><a href="/breeded-shelter/staff" id="navBar2">Meet Our Staff</a></li>
                <li class="crumb"><a href="/breeded-shelter/residents" id="navBar3">Our Residents</a></li>
            </ol>
        </center>
    </nav>
    <div>
    <hr/>
    </div>
    <center>
    <div className="welcomePage">
      <img id="mainImage" src={`${process.env.PUBLIC_URL}/Dogs/affenpinscher1_1.jpg`} alt="Welcome to Breed Shelter" />
    </div>
    </center>
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
    Residents: state.Residents
  }

}

     const mapDispatchToProps = (dispatch) => {
       return{
         Residents: (list) => { dispatch({type: 'SET_BREEDS', list})}
       }
     }


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);