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
    <div className = "container">
    <center><h1>Breeded Shelter</h1></center>
    </div>
    <div>
    <hr/>
    <center><a href={"/breeded-shelter/main"}><button>Welcome</button></a></center>
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