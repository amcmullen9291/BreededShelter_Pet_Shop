import React, {useState } from 'react';
import { Link } from 'react-router-dom';



function Staff(){

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
        <div className="staffRightArea">
            <p id="staffWords">
        <img className="staffPics"  id="jumpingMan" src={`${process.env.PUBLIC_URL}/Staff/jumpingGuy.jpg`} alt="..." height="" width="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>

        <div className="staffRightArea">
            <p id="staffWords">Lconsectetur adipiscing elit, sed do. Eiusmod tempor incididunt ut labore et dolore magna!
        <img className="staffPics" id="bossPic" src={`${process.env.PUBLIC_URL}/Staff/bossPic.jpg`} alt="..." height="" width="" /></p>
        </div>

    <div className="staffRightArea">
        <p id="staffWords">
    <img className="staffPics" id="singingGirl" src={`${process.env.PUBLIC_URL}/Staff/singingGirl.jpg`} alt="..." height="" width="" />Eiusmod tempor incididunt ut labore et dolore magna.</p>
    </div>
    </div>
    <p id="bottomStaffText"><i>Lorem ipsum dolor sit amet, consectetur adipiscing</i></p>
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
 export default Staff;