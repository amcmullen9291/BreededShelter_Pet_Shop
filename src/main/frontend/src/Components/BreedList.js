import { useState, useEffect } from 'react';

function BreedList() {
  const [books, setBooks] = useState(null);
const BREED_LIST_URL = "http://localhost:8080/breeded_shelter/residents";
  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(BREED_LIST_URL);
      const data = await response.json();

      // store the data into our books variable
      setBooks(data) ;
    }
  }, []); // <- you may need to put the setBooks function in this array

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
        {books.map((book, index) => (
          <div key={index}>
            <tr>
            <td className="name">{book.residentsName}</td><td className="spacer"></td><td className="breed">{book.breedName}</td><td className="spacer"></td><td className="group">{book.group}</td><td className="spacer"></td><td className="gender">{book.gender}</td><td className="spacer"></td><td className="age"><center>{book.age}</center></td>
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