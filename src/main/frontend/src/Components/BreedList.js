import { connect, useSelector, useDispatch } from 'react-redux';
import { filteredBreedList } from '../Actions/BreedActions';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function BreedList(){

  const FilteredList = useSelector((state) => state.FilteredList);
  const dispatch = useDispatch();
  const BREED_LIST_URL = "http://localhost:8080/breeded_shelter/residents";

  console.log("Current Residents: ", FilteredList.state)
  console.log("State Breweries:", FilteredList)

  const fetchFilteredList = async () => {
    const response = await axios.get(BREED_LIST_URL)
    .then(response => {dispatch(filteredBreedList(response))})
    .catch((error) => {
      console.log("Error:", error);
    });
  };

  useEffect(() => {
    fetchFilteredList();
  }, [])

if(Object.keys(FilteredList.Filter).length >0){
  console.log("DataSet after length check:", FilteredList.Filter.data)
  var StateList = FilteredList.Filter.data.map(puppy => {
    const {id, breedName, group, age, residentsName } = puppy;
  return (<tr key={id}>
           <td>{breedName}</td>
           <td className="spacer"></td>
           <td>{group}</td>
           <td className="spacer"></td>
           <td>{residentsName}</td>
           <td className="spacer"></td>
           <td>{age}</td>
       </tr>
      )
  }
  )
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
        {StateList}
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
const mapStateToProps = (state) => {
  return {
    FilteredList: state.FilteredList
  }

}

     const mapDispatchToProps = (dispatch) => {
       return{
         FilteredList: (FilteredList) => { dispatch({type: 'FILTERED_LIST', FilteredList})}
       }
     }


export default connect(mapStateToProps, mapDispatchToProps)(BreedList);