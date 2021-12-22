import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export var puppyID;
export var puppyBreed;

function BreedList() {

  const [Residents, setResidents] = useState(null);
const BREED_LIST_URL = "http://localhost:8080/breeded_shelter/residents";
  // + adding the use
  useEffect(() => {
    getBreeds();

    async function getBreeds() {
      const response = await fetch(BREED_LIST_URL);
      const data = await response.json();
      setResidents(data) ;
    }
  }, []);

  function selectedBreed(e, breedName, id){
    e.preventDefault();
    console.log("Breed param: ", breedName);
    console.log("ID param: ", id);
    window.puppyID = id;
    window.puppyBreed = breedName;
  }

  function sortByGroup(e, group){
  const newList = Residents.filter(puppy=> puppy.group === group);
          console.log("type:", group);
          console.log("New List:", newList);
          setResidents(newList);
          let button = document.getElementById("resetButton");
          button.style.visibility = "visible" ;
  }

  function resetList(e){
          e.preventDefault();
          let button = document.getElementById("resetButton");
          window.location.reload();
          button.style.visibility = "hidden";
          console.log("page resetting");
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
    {Residents && (
      <div>
<center><table id="residentsTable">
        <thead>
        <tr id="tableHead"><td className="name" id="name">Resident</td><td className="spacer"></td><td className="breed">Breed</td><td className="spacer"></td><td className="group">Grouping</td><td className="spacer"></td><td className="gender">Gender</td><td className="spacer"></td><td className="age">Age(Weeks)</td></tr>
        </thead>
        <tbody>
        {Residents.map((puppy, index) => (
          <div key={index}>
            <tr>
            <td className="name">{puppy.residentsName}</td><td className="spacer"></td><td className="breed">{puppy.breedName}</td><td className="spacer"></td><td className="group"><button class="link"onClick={(e) => sortByGroup(e, `${puppy.group}`)}>{puppy.group}</button></td><td className="spacer"></td><td className="gender">{puppy.gender}</td><td className="spacer"></td><td className="age" id= "puppyAge" align="right">{puppy.age}</td><td className="spacer"></td><td onClick={(e) => selectedBreed(e, `${puppy.breedName}`, `${puppy.id}`)} className="moreInfo"><Link to={`/breeded-shelter/residents/${puppy.breedName}/${puppy.id}`}>Info</Link></td>
            </tr>
          </div>
        ))}
        </tbody>
</table>
<button id="resetButton" onClick={resetList}>Return full list</button>
</center>
        <center><span>Click on a group name to see filter listings </span></center>
      </div>
    )}
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

   const mapDispatchToProps = (dispatch) => {
     return{
       Residents: (breed) => { dispatch({type: 'SELECTED_BREEDS', breed})}
     }
   }



export default connect(mapStateToProps, mapDispatchToProps)(BreedList);