
import './App.css';

import img1 from './img/Capture.PNG'
import img2 from './img/logo.jpg'
import img3 from './img/indialogo.jpg'
import img4 from './img/qrcode.png'
import img5 from './img/bellicon.png'
import img6 from './img/questionmark.png'
import img7 from './img/hometwo.png'
import img8 from './img/stores.jpg'
import img9 from './img/insurance.png'
import img10 from './img/transaction.png'



function App() {
  return (
    <div classNameName="App1">


      <nav className="navbar navbar-expand-lg  sticky-top " >

        <div className="container-fluid">
          <img className="userlogo" src={img2} alt="..." />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">

            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll indias">
              <img className="indialogo" src={img3} alt="..." />


              <li className="nav-item ">
                <select className="form-select" aria-label="Default select example">

                  <option selected>Mumbai</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </li>


              <li className="nav-item dropdown">

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>

            </ul>
            <img className="qrcode" src={img4} alt="..." />
            <img className="bellicon" src={img5} alt="..." />
            <img className="questionmark" src={img6} alt="..." />

          </div>
        </div>
      </nav >





      <div className="container text-center rowss  ">

        {/* First Row*/}

        <div className="row align-items-start firstrow">
          <div className="col firstcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            One of three columns
          </div>
          <div className="col secondcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            two of three columns
          </div>
          <div className="col secondcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            two of three columns
          </div>
        </div>


        {/* Second Row*/}


        <div className="row align-items-start secondrow">
          <div className="col firstcol ">
            <img className="cardone " src={img1} alt="..." />
            <br />
            One of three columns
          </div>
          <div className="col secondcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            two of three columns
          </div>
          <div className="col secondcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            two of three columns
          </div>





        </div>

        {/*Third Row*/}


        <div className="row align-items-start thirdrow">
          <div className="col firstcol ">
            <img className="cardone " src={img1} alt="..." />
            <br />
            One of three columns
          </div>
          <div className="col secondcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            two of three columns
          </div>
          <div className="col secondcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            two of three columns
          </div>
        </div>

        {/*Fourth Row*/}


        <div className="row align-items-start fourthrow">
          <div className="col firstcol ">
            <img className="cardone " src={img1} alt="..." />
            <br />
            One of three columns
          </div>
          <div className="col secondcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            two of three columns
          </div>
          <div className="col secondcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            two of three columns
          </div>
        </div>

        {/*Fifth Row*/}



        <div className="row align-items-start fifthrow">
          <div className="col firstcol ">
            <img className="cardone " src={img1} alt="..." />
            <br />
            One of three columns
          </div>
          <div className="col secondcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            two of three columns
          </div>
          <div className="col secondcol">
            <img className="cardone " src={img1} alt="..." />
            <br />
            two of three columns
          </div>
        </div>




      </div>

      <nav class="navbar sticky-bottom   ">
        <div class="container-fluid  ">
          <div className="row  sixthrow stickybottom1">
            <div className="col firstcol sixthone ">
              <img className="cardone " src={img6} alt="..." />
              <br />
              home
            </div>
            <div className="col secondcol sixthone">
              <img className="cardone " src={img7} alt="..." />
              <br />
              stores

            </div>
            <div className="col secondcol sixthone">
              <img className="cardone " src={img8} alt="..." />
              <br />
              insurance
            </div>
            <div className="col secondcol sixthone">
              <img className="cardone " src={img10} alt="..." />
              <br />
              transaction
            </div>
          </div>
        </div>
      </nav>










    </div >
  );
}

export default App;
