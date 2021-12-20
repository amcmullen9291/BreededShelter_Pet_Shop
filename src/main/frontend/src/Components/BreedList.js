import { connect, useDispatch } from 'react-redux';
import { setBreeds } from '../Actions/BreedActions';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'

function BreedList(){
//    const Residents = useSelector((state) => state.Residents);
     const dispatch = useDispatch();
     const BREED_LIST_URL = "http://localhost:8080/breeded_shelter/residents";

     const fetchBreeds = async () => {

        const APIResponse = await axios.get(BREED_LIST_URL)
        .then(response => {dispatch(setBreeds(response))})
        .catch((error) => {
          console.log("Error:", error);
        });

      };

      useEffect(() => {
        fetchBreeds();
      }, [])


return (
        <>
        <center><h1>Breed List Page</h1></center>
        <footer>
        <div>
        <hr/>
            <center><Link to={"/breeded-shelter/main"}>Main Menu</Link></center>
        </div>
        </footer>
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

 export default connect(mapStateToProps, mapDispatchToProps)(BreedList);