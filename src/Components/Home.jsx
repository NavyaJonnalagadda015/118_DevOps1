import React, { Component } from 'react'
import "../App.css"
class Home extends Component {


  openSignin() {
    // alert("Welcome to our class");
    document.getElementById("popup").style.display = "block";
  }

  openSignup() {
    // alert("Welcome to our class");
    document.getElementById("popup_signup").style.display = "block";
  }

  closePopup() {
    document.getElementById("popup_signup").style.display = "none";
    document.getElementById("popup").style.display = "none";
  }

  render() {
    return (
      <div id="container">
        <div id="header">
          <img className="logo" src="/logo.png" alt="Logo" />
          <div className="logotext">
            <span>Job</span> Portal
          </div>
          <img className="signicon" src="/user.png" alt="User Icon" />
          <label className="signtext" onClick={this.openSignin}>SignIn</label>
        </div>


        <div id="content">
          <div className="text1">Section 7 - Job Portal</div>
          <div className="searchbar">
            <input type="text" className="searchtext" placeholder="Search Job Titles" />
            <input type="text" className="searchL" placeholder="Location" />
            <input type="text" id="txtIndustry" className="searchR" placeholder="Industry" autoComplete='none' />
            <input type="Button" value="search" width="200px" className="searchButton" />
          </div>
        </div>


        <div id="footer">
          <img className="socialmedia" src="/facebook.png" alt="Facebook" />
          <img className="socialmedia" src="/twitter.png" alt="Twitter" />
          <img className="socialmedia" src="/linkedin.png" alt="LinkedIn" />
        </div>

        <div id="copyright">
          <label className="copyrighttext">&copy; 2025 Sec7 Job Platform. All rights reserved.</label>
        </div>

        <div id="popup">
          <div id="popupwindow">
            <div id='popupHeader'>
              Login
            </div>
            <div id='signIn'>

              <input type='text' id='username' placeholder='User Name' />

              <input type='password' id='password' placeholder='Password' />
              <div className='forgotPassword'>Forgot <label>Password?</label></div>
              <button className='signinbutton'>Sign In</button>
              <div className='div1'></div>
              <div className='div2'>
                Doesn't Have an Account
                <label onClick={this.openSignup}>SignUp Now </label>
              </div>
              <button onClick={this.closePopup}>Close</button>
            </div>
          </div>
        </div>

        <div id="popup_signup">
          <div id="popupwindow">
            <div id="signup">
            {/* <h3>SignUp</h3>
              <p>This is a popup.</p>
              
              <button onClick={this.closePopup}>Close</button> */}

            <label>Full Name*</label>
            <input type='text' id='fullname' />
            <label>Email</label>
            <input type='text' id='email' />
            <label>select Role*</label>
            <select id='role'>
              <option value=''></option>
              <option value='1'>Admin</option>
              <option value='2'>Employeer</option>
              <option value='3'>Job seeker</option>
            </select><br></br>
            <label>Password*</label>
            <input type='password' id="password" />
            <label>Confirm Passowrd*</label>
            <input type='passoword' id='confirmpassword' />
            <button>Register</button>
            <div>Already have an account?<span onClick={this.showSignin}>SIGN IN</span></div>
            <button onClick={this.closePopup}>Close</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home
