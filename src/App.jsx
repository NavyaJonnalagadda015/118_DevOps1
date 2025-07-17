import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from "./Components/Home"
import Login1 from './Components/Login'
import Dashboard from './Components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
    <Home/>
     {/* <Login1/> */}
    {/* <Dashboard/>
    <Error/>  */}
  
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src="https://img.freepik.com/free-photo/pleased-young-handsome-man-holding-mobile-phone-looking-side-isolated-white-background-with-copy-space_141793-132117.jpg?ga=GA1.1.2033398525.1735192585&semt=ais_hybrid" className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src="https://img.freepik.com/free-photo/happy-caucasian-little-boy-isolated-white-studio-background-looks-happy-cheerful-sincere-copyspace-childhood-education-emotions-concept_155003-46038.jpg?ga=GA1.1.2033398525.1735192585&semt=ais_hybrid" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Test Page</h1>
      <form action="http://www.google.com">
      <table  border="2">
      <tr>
          <td colSpan="2"> User Login</td>
           </tr>
        <tr>
          <td> User Name</td>
          <td> <input type='text' required placeholder='user Name' width="150px" /></td>          
        </tr>
        <tr>
          <td> Password</td>
          <td> <input type='password' required placeholder='user Password' width="150px" /></td>          
        </tr>
        <tr>
          <td> <input type='submit' value="Login" /></td>
          <td> <input type='reset' value="Reset" /></td>
         
        </tr>
      </table>
      </form> 
       <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> 
       <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
