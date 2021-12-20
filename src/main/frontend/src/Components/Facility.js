import React, {useState } from 'react';
import { Link } from 'react-router-dom';



function Facility(){

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
    <br/>
    <center><img id="mainImage2" src={`${process.env.PUBLIC_URL}/Logos/text-1639206732282.png`} alt="Welcome to Breed Shelter" /></center>
    <br/>
    </div>
    <nav class="crumbsArea">
        <center>
            <ol>
                <li class="crumb"><a href="/breeded-shelter/facility" id="navBar"><i>Our</i> Breeded Shelter</a></li>
                <li class="crumb"><a href="/breeded-shelter/staff" id="navBar2">Meet Our Staff</a></li>
                <li class="crumb"><a href="/breeded-shelter/residents" id="navBar3">Our Residents</a></li>
            </ol>
        </center>
    </nav>
    <div>
    <hr/>
    </div>
    <div>
    <div className="leftArea">
    <img className="facilityPics" src={`${process.env.PUBLIC_URL}/Facility/boardinghouse-pic1.jpeg`} alt="..." height="" width="" />
    </div>
    <div className="rightArea">
    <span id="facilityWords"><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br/>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
    </div>
    <center><img id="bigPic" src={`${process.env.PUBLIC_URL}/Facility/boardinghouse-pic3.jpg`} alt="..." height="" width="" /></center>
    <span className="facilityBtmText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
    </div>
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
// export default connect(mapStateToProps, mapDispatchToProps)(BreedList);
 export default Facility;