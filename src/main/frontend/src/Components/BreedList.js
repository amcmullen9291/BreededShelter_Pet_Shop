import { useState, useEffect } from 'react';

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
    {books && (
      <div className="books">
<center><table id="residentsTable">
        <thead>
        <tr id="tableHead"><td className="name">Resident</td><td className="spacer"></td><td className="breed">Breed</td><td className="spacer"></td><td className="group">Grouping</td><td className="spacer"></td><td className="gender">Gender</td><td className="spacer"></td><td className="age"><center>Age(Weeks)</center></td></tr>
        </thead>
        <tbody>
        {Residents.map((puppy, index) => (
          <div key={index}>
            <tr>
            <td className="name">{puppy.residentsName}</td><td className="spacer"></td><td className="breed">{puppy.breedName}</td><td className="spacer"></td><td className="group">{puppy.group}</td><td className="spacer"></td><td className="gender">{puppy.gender}</td><td className="spacer"></td><td className="age"><center>{puppy.age}</center></td>
            </tr>
          </div>
        ))}
        </tbody>
</table></center>
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

export default BreedList;