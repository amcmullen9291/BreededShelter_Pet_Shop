import { connect, useSelector, useDispatch } from 'react-redux';
import { filteredBreedList } from '../Actions/BreedActions';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function BreedList(){

  const BREED_LIST_URL = "http://localhost:8080/breeded_shelter/residents";

    const[ Residents, setResidents ] = useState([]);

    useEffect(() => {
        const fetchBreeds = async() => {
            try{
                const resp = await fetch(BREED_LIST_URL);
                const json = resp.json();
                console.log(json);
                setResidents(json.results)
            }catch(e){
                console.log(e);
            }
        };
        fetchBreeds();
    }, []);

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
    <table id="residentTable">
        <body>
            <tr>
            <td>Breed</td>
            <td className="spacer"></td>
            <td>Group</td>
            <td className="spacer"></td>
            <td>Residents Name</td>
            <td className="spacer"></td>
            <td>Age (weeks)</td>
            </tr>
        </body>
    </table>
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
export default BreedList;